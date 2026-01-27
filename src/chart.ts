import type { Sale } from "./contexts/dashboard";

export function hourlyDatapoints(sales: Sale[], accumulateWhat: "amount sold" | "turnover") {
    const now = new Date();
    const isToday = (d: Date) =>
        d.getFullYear() === now.getFullYear() &&
        d.getMonth() === now.getMonth() &&
        d.getDate() === now.getDate();

    const salesToday = sales.filter(({ date }) => isToday(date));
    const hoursOcurrences = new Map(
        Array.from({ length: 24 }, (_, i) => [i, 0])
    );

    for (const sale of salesToday) {
        const h = sale.date.getHours();
        const add = accumulateWhat === "amount sold"
            ? sale.amount
            : sale.totalPrice;
        hoursOcurrences.set(h, (hoursOcurrences.get(h) || 0) + add);
    }
    return [...hoursOcurrences.values()];
}

export function weeklyDatapoints(
    sales: Sale[],
    previousWeek: boolean | undefined,
    accumulateWhat: "amount sold" | "turnover",
) {
    const now = new Date();

    if (previousWeek) {
        now.setDate(now.getDate() - 7);
    }

    const weekStart = new Date(now);
    const day = now.getDay();

    const diff = day === 0 ? -6 : 1 - day;
    weekStart.setDate(now.getDate() + diff);
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);

    const isWithinWeek = (d: Date) => d >= weekStart && d <= weekEnd;

    const salesWithinWeek = sales.filter(({ date }) => isWithinWeek(date));

    const dotwOccurrences = new Map(
        Array.from({ length: 7 }, (_, i) => [i, 0])
    );
    for (const sale of salesWithinWeek) {
        const d = sale.date.getDay();
        const add = accumulateWhat === "amount sold"
            ? sale.amount
            : sale.totalPrice;

        dotwOccurrences.set(d, (dotwOccurrences.get(d) || 0) + add);
    }

    const dotwMonday = [...dotwOccurrences.values()];
    const sunday = dotwMonday.shift()!;
    dotwMonday.push(sunday);

    return dotwMonday;
}

export const LEGEND_HOURS = Array.from({ length: 24 }, (_, i) => i).map(
    n => (n + 1).toString() + "h"
)

export const LEGEND_WEEKDAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;

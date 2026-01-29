import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router";

export type Offer = {
    name: string;
    image: string;
    amountSold: number;
    turnover: number;
    uniqueViews: number;
};

export type Review = {
    reviewer: string;
    score: number;
    reviewText: string;
    date: string;
};

export type SellerQuality = {
    quick_response: number;
    quick_sending: number;
    returns: number;
    packaging: number;
    pricing: number;
};

export type Sale = {
    amount: number;
    totalPrice: number;
    date: Date;
};

export type Dashboard = {
    orders: {
        unpaid: number;
        unsent: number;
        returns: number;
    };
    offers: Offer[];
    reviews: Review[];
    quality: SellerQuality;
    recommendations: string[];
    sales: Sale[];
};

type DashboardContext = {
    dashboard: Dashboard;
};

const DashboardContext = createContext<DashboardContext | undefined>(undefined);

interface DashboardProviderProps {
    children: React.ReactNode;
}

export default function DashboardProvider({
    children,
}: DashboardProviderProps) {
    const [dashboard] = useState<Dashboard>(mockDashboard());

    return (
        <DashboardContext.Provider value={{ dashboard }}>
            {children}
        </DashboardContext.Provider>
    );
}

export function DashboardProviderLayout() {
    return (
        <DashboardProvider>
            <Outlet />
        </DashboardProvider>
    );
}

export const useDashboard = () => {
    const context = useContext(DashboardContext);
    if (!context) throw new Error("useDashboard outside of DashboardProvider");
    return context;
};

function mockDashboard(): Dashboard {
    return {
        orders: {
            unpaid: 0,
            unsent: 0,
            returns: 12,
        },
        recommendations:[],
        quality: {
            quick_response: 8,
            quick_sending: 4,
            returns: 2,
            packaging: 10,
            pricing: 6,
        },
        reviews: [
            {
                reviewer: "Teto",
                score: 5,
                reviewText: "Nie wiedział",
                date: "1945-11-20",
            },
            {
                reviewer: "Michalina Hatrzyńska",
                score: 4,
                reviewText: "",
                date: "2026-01-01",
            },
            {
                reviewer: "TheFoka",
                score: 1,
                reviewText: "",
                date: "2011-11-11",
            },
            {
                reviewer: "Akitka Nerkowska",
                score: 2,
                reviewText: "Nie uwierzycie co sie wydarzylo",
                date: "0030-04-07",
            },
            {
                reviewer: "Kaikowska Juki",
                score: 5,
                reviewText: "Opóźniony pociąg",
                date: "2019-12-24",
            },
        ],
        offers: [
            {
                name: "Computer",
                image: "/computer.png",
                amountSold: 999,
                turnover: 999_000,
                uniqueViews: 652,
            },
            {
                name: "Palmtop",
                image: "/palmtop.png",
                amountSold: 333,
                turnover: 333_000,
                uniqueViews: 2382,
            },
            {
                name: "Laptop",
                image: "/laptop.png",
                amountSold: 555,
                turnover: 555_000,
                uniqueViews: 12387,
            },
            {
                name: "PC",
                image: "/pc.png",
                amountSold: 777,
                turnover: 777_000,
                uniqueViews: 1781,
            },
            {
                name: "Cellphone",
                image: "/cellphone.png",
                amountSold: 111,
                turnover: 111_000,
                uniqueViews: 723,
            },
        ],
        sales: [...mockSalesExp()],
    };
}

function mockSalesExp() {
    const sales = [];
    const now = new Date();
    const days = 14;

    for (let i = 0; i < days; i++) {
        const date = new Date(now);
        date.setDate(now.getDate() - (days - i));
        date.setHours(12, 0, 0, 0);

        const g = Math.pow(1.25, i);
        const amount = Math.round(1 * g);
        const totalPrice =
            Math.round((10 + Math.random() * 99) * g * 100) / 100;

        sales.push({ date, amount, totalPrice });
    }

    const hours = 24;
    for (let i = 0; i < hours; i++) {
        const date = new Date(now);
        date.setHours(i, 30, 0, 0);
        
        const g =  Math.pow(1.25, i);
        const amount = Math.round(1 * g);
        const totalPrice =
            Math.round((10 + Math.random() * 99) * g * 100) / 100;

        sales.push({ date, amount, totalPrice });
    }

    return sales;
}

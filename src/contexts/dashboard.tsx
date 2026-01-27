import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router";

export type Offer = {
    name: string;
    image: string;
    amountSold: number;
    turnover: number;
    uniqueViews: number;
};

export type Dashboard = {
    orders: {
        unpaid: number;
        unsent: number;
        returns: number;
    };
    offers: Offer[];
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
    const [dashboard, _] = useState<Dashboard>(mockDashboard());

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
    };
}

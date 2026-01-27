import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router";

export type Dashboard = {
    orders: {
        unpaid: number;
        unsent: number;
        returns: number;
    };
};

type DashboardContext = {
    dashboard: Dashboard,
}

const DashboardContext = createContext<DashboardContext | undefined>(undefined);

interface DashboardProviderProps {
    children: React.ReactNode;
}

export default function DashboardProvider({
    children,
}: DashboardProviderProps) {
    const [dashboard, _] = useState<Dashboard>(mockDashboard());

    return (
        <DashboardContext.Provider value={{dashboard}}>
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
    };
}

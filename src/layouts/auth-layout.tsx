import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/auth";

export default function AuthLayout() {
    const { user } = useAuth();

    return <>{user ? <Outlet /> : <Navigate to="/login" replace />}</>;
}

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import theme from "./theme.ts";

import Login from "./pages/login.tsx";
import Index from "./pages/index.tsx";
import Assessment from "./pages/assessment.tsx";
import Orders from "./pages/orders.tsx";
import Reviews from "./pages/reviews.tsx";

import AuthLayout from "./layouts/auth-layout.tsx";
import MainLayout from "./layouts/main-layout.tsx";
import SubpageLayout from "./layouts/subpage-layout.tsx";

import AuthProvider from "./contexts/auth.tsx";

theme.init();
import "./i18n";

createRoot(document.getElementById("root")!).render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route element={<AuthLayout />}>
                    <Route element={<MainLayout />}>
                        <Route index element={<Index />} />
                    </Route>
                    <Route element={<SubpageLayout />}>
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="assessment" element={<Assessment />} />
                        <Route path="orders" element={<Orders />}>
                            <Route
                                path="unsent"
                                element={<Orders type="unsent" />}
                            />
                            <Route
                                path="unpaid"
                                element={<Orders type="unpaid" />}
                            />
                            <Route
                                path="returns"
                                element={<Orders type="returns" />}
                            />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);

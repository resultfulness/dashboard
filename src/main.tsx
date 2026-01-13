import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import theme from "./theme.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./pages/index.tsx";
import Assessment from "./pages/assessment.tsx";
import Orders from "./pages/orders.tsx";
import Reviews from "./pages/reviews.tsx";
import MainLayout from "./layouts/main-layout.tsx";
import SubpageLayout from "./layouts/subpage-layout.tsx";

theme.init();
import "./i18n";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Index />} />
            </Route>
            <Route element={<SubpageLayout />}>
                <Route path="reviews" element={<Reviews />} />
                <Route path="assessment" element={<Assessment />} />
                <Route path="orders">
                    <Route path="unsent" element={<Orders type="unsent" />} />
                    <Route path="unpaid" element={<Orders type="unpaid" />} />
                    <Route path="returns" element={<Orders type="returns" />} />
                </Route>
            </Route>
        </Routes>
        <App />
    </BrowserRouter>
);

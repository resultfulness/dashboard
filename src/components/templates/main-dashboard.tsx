import "./main-dashboard.css";
import { useTranslation } from "react-i18next";
import PageHeader from "../organisms/page-header";
import type { JSX } from "react";

interface MainDashboardProps {
    OrdersWidget: JSX.Element;
    ReviewsWidget: JSX.Element;
    AssessmentWidget: JSX.Element;
    TopOffersWidget: JSX.Element;
    SalesChartWidget: JSX.Element;
    RecommendationsWidget: JSX.Element;
}

export default function MainDashboard({
    OrdersWidget,
    ReviewsWidget,
    TopOffersWidget,
    AssessmentWidget,
    SalesChartWidget,
    RecommendationsWidget,
}: MainDashboardProps) {
    const { t } = useTranslation();

    return (
        <div className="main-dashboard">
            <PageHeader title={t("dashboard")} />
            <main className="dashboard">
                <div className="dashboard-orders">{OrdersWidget}</div>
                <div className="dashboard-reviews">{ReviewsWidget}</div>
                <div className="dashboard-top-offers">{TopOffersWidget}</div>
                <div className="dashboard-assessment">{AssessmentWidget}</div>
                <div className="dashboard-sales-chart">{SalesChartWidget}</div>
                <div className="dashboard-recommendations">
                    {RecommendationsWidget}
                </div>
            </main>
        </div>
    );
}

import AssessmentWidget from "../components/organisms/assessment-widget";
import OrdersWidget from "../components/organisms/orders-widget";
import RecommendationsWidget from "../components/organisms/recommendations-widget";
import ReviewsWidget from "../components/organisms/reviews-widget";
import SalesChartWidget from "../components/organisms/sales-chart-widget";
import TopOffersWidget from "../components/organisms/top-offers-widget";
import MainDashboard from "../components/templates/main-dashboard";
import { useDashboard } from "../contexts/dashboard";

export default function Index() {
    const { dashboard } = useDashboard();

    return (
        <MainDashboard
            OrdersWidget={<OrdersWidget data={dashboard.orders} />}
            ReviewsWidget={<ReviewsWidget />}
            TopOffersWidget={<TopOffersWidget data={dashboard.offers} />}
            AssessmentWidget={<AssessmentWidget />}
            SalesChartWidget={<SalesChartWidget />}
            RecommendationsWidget={<RecommendationsWidget />}
        />
    );
}

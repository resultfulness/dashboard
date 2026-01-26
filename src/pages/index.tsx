import AssessmentWidget from "../components/organisms/assessment-widget";
import OrdersWidget from "../components/organisms/orders-widget";
import RecommendationsWidget from "../components/organisms/recommendations-widget";
import ReviewsWidget from "../components/organisms/reviews-widget";
import SalesChartWidget from "../components/organisms/sales-chart-widget";
import TopOffersWidget from "../components/organisms/top-offers-widget";
import MainDashboard from "../components/templates/main-dashboard";

export default function Index() {
    return (
        <MainDashboard
            OrdersWidget={<OrdersWidget data={{
                unpaid: 0,
                unsent: 0,
                returns: 12,
            }} />}
            ReviewsWidget={<ReviewsWidget />}
            TopOffersWidget={<TopOffersWidget />}
            AssessmentWidget={<AssessmentWidget />}
            SalesChartWidget={<SalesChartWidget />}
            RecommendationsWidget={<RecommendationsWidget />}
        />
    );
}

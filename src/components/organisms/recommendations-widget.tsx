import { useTranslation } from "react-i18next";
import Widget from "../molecules/widget";
import type { Dashboard } from "../../contexts/dashboard";

import "./recommendations-widget.css";

interface RecommendationsWidgetProps {
    data: Dashboard["recommendations"];
}

export default function RecommendationsWidget({
    data,
}: RecommendationsWidgetProps) {
    const { t } = useTranslation();
    return (
        <Widget title={t("recommendations")}>
            <div className="recommendations">
                {data.length > 0
                    ? `${data.length} ${t("recommendations")}`
                    : t("no_recommendations")}
            </div>
        </Widget>
    );
}

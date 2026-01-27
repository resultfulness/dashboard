import { useTranslation } from "react-i18next";
import Widget from "../molecules/widget";
import type { Dashboard } from "../../contexts/dashboard";

interface RecommendationsWidgetProps {
    data: Dashboard["recommendations"];
}

export default function RecommendationsWidget({
    data,
}: RecommendationsWidgetProps) {
    const { t } = useTranslation();
    return (
        <Widget title={t("recommendations")}>
            {data.length > 0 ? (
                <span>{`${data.length} ${t("recommendations")}`}</span>
            ) : (
                <span>{t("no_recommendations")}</span>
            )}
        </Widget>
    );
}

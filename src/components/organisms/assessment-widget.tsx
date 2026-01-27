import Button from "../atoms/button.tsx";
import Widget from "../molecules/widget";
import Icon from "../atoms/icon.tsx";

import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import type { Dashboard, SellerQuality } from "../../contexts/dashboard.tsx";
import HighlightCardGrid from "../molecules/highlight-card-grid.tsx";

interface AssessmentWidgetProps {
    data: Dashboard["quality"];
}

export default function AssessmentWidget({ data }: AssessmentWidgetProps) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function grade(score: number) {
        if (score > 9.5) {
            return "S";
        } else if (score > 8) {
            return "A";
        } else if (score > 6) {
            return "B";
        } else if (score > 4) {
            return "C";
        } else {
            return "D";
        }
    }

    function chooseWorstAreas(
        data: SellerQuality
    ): { label: string; value: number }[] {
        const entries = Object.entries(data);
        return entries
            .sort((a, b) => a[1] - b[1])
            .slice(0, 3)
            .map(e => ({ label: t(e[0]), value: `${e[1]}/10` }));
    }

    const quality_score =
        (data.quick_response +
            data.quick_sending * 2 +
            data.returns * 2 +
            data.packaging * 2 +
            data.pricing * 3) /
        10;
    const quality_tier = grade(quality_score);
    const worst_areas = chooseWorstAreas(data);
    console.log(data)

    return (
        <Widget
            title={t("assessment")}
            action={
                <Button
                    variant="secondary"
                    onclick={() => navigate("/assessment")}
                >
                    <span>{t("open_assessment")}</span>
                    <Icon icon="arrow-right" />
                </Button>
            }
        >
            {!Object.values(data).includes(0) ? (
                <HighlightCardGrid
                    firstRow={[
                        {
                            label: t("quality_score"),
                            value: `${quality_score}/10`,
                        },
                        { label: t("quality_tier"), value: quality_tier },
                    ]}
                    secondRow={worst_areas}
                    subheading={t("worst_areas")}
                />
            ) : (
                <span>{t("no_assessment")}</span>
            )}
        </Widget>
    );
}

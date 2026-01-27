import { useTranslation } from "react-i18next";
import Widget from "../molecules/widget";
import type { Dashboard, Review } from "../../contexts/dashboard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../atoms/button";
import Icon from "../atoms/icon";
import SubtitledList from "../molecules/subtitled-list";
import TabbedView from "../molecules/tabbed-view";

interface ReviewsWidgetProps {
    data: Dashboard["reviews"];
}

export default function ReviewsWidget({ data }: ReviewsWidgetProps) {
    const tabs = ["all", "positive", "negative"];
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [filter, setFilter] = useState<"all" | "negative" | "positive">(
        "all"
    );

    function sutbtitletify(reviews: Review[]) {
        return reviews.map(r => {
            const dt = new Date(r.date);
            const d = dt.getDate().toString().padStart(2, "0");
            const m = (dt.getMonth() + 1).toString().padStart(2, "0");
            const y = (dt.getFullYear() % 100).toString().padStart(2, "0");
            return {
                label: `${r.score}/5`,
                text: r.reviewText,
                subTitle: `${r.reviewer}, ${d}/${m}/${y}`,
                highlight: r.score === 5,
            };
        });
    }

    function filterReviews(reviews: Review[], filter: "all" | "positive" | "negative") {
        let revs = null;
        switch (filter) {
            case "positive":
                revs = reviews.filter(v => v.score > 3);
                break;
            case "negative":
                revs = reviews.filter(v => v.score < 3);
                break;
            default:
                revs = reviews;
        }
        return sutbtitletify(
            revs
                .sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .slice(0, 5)
        );
    }

    const items = filterReviews(data, filter);

    return (
        <Widget
            title={t("reviews")}
            action={
                <Button
                    variant="secondary"
                    onclick={() => navigate("/reviews")}
                >
                    <span>{t("open_reviews")}</span>
                    <Icon icon="arrow-right" />
                </Button>
            }
        >
            <TabbedView
                tabs={tabs.map((m: string) => t(m))}
                highlight={tabs.indexOf(filter)}
                onclick={(i: number) => {
                    setFilter(tabs[i]);
                }}
            >
                <SubtitledList items={items} />
            </TabbedView>
            {items.length === 0 && <span>{t("no_reviews")}</span>}
        </Widget>
    );
}

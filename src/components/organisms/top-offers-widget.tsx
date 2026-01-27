import "./top-offers-widget.css";
import { useTranslation } from "react-i18next";
import Widget from "../molecules/widget";
import type { Dashboard, Offer } from "../../contexts/dashboard";
import TextLabel from "../atoms/text-label";
import Table from "../molecules/table";
import { useEffect, useState } from "react";
import Button from "../atoms/button";
import Icon from "../atoms/icon";

interface TopOffersWidgetProps {
    data: Dashboard["offers"];
}

export default function TopOffersWidget({ data }: TopOffersWidgetProps) {
    const { t } = useTranslation();
    const [headerLabels, setHeaderLabels] = useState<string[]>([]);
    const [values, setValues] = useState<any[][]>([]);
    const [sort, setSort] = useState<"least sold" | "most sold">("most sold");

    function toggleSort() {
        setSort(sort => (sort === "least sold" ? "most sold" : "least sold"));
    }

    function tableifyTop(offers: Offer[], howMany: number) {
        const vals = [...offers];
        vals.sort((a, b) => b.amountSold - a.amountSold);
        return vals
            .slice(0, howMany)
            .map(({ name, image, amountSold, uniqueViews }) => [
                name,
                <img src={image} alt={`${name} image`} />,
                amountSold,
                uniqueViews,
            ]);
    }

    function tableifyBottom(offers: Offer[], howMany: number) {
        const vals = [...offers];
        vals.sort((a, b) => a.amountSold - b.amountSold);
        return vals
            .slice(0, howMany)
            .map(({ name, image, amountSold, turnover }) => [
                name,
                <img src={image} alt={`${name} image`} />,
                amountSold,
                turnover,
            ]);
    }

    useEffect(() => {
        if (data.length > 0) {
            if (sort === "least sold") {
                setHeaderLabels([
                    t("name"),
                    t("offer_image"),
                    t("amount sold"),
                    t("unique views"),
                ]);
                setValues(tableifyTop(data, 5));
            } else if (sort === "most sold") {
                setHeaderLabels([
                    t("name"),
                    t("offer_image"),
                    t("amount sold"),
                    t("turnover"),
                ]);
                setValues(tableifyBottom(data, 5));
            }
        }
    }, [data, sort, t]);

    return (
        <Widget
            title={t("top offers")}
            action={
                <Button variant="secondary" onclick={() => toggleSort()}>
                    {sort === "least sold" ? (
                        <Icon icon="sort" />
                    ) : (
                        <Icon icon="sort-reverse" />
                    )}
                    {sort === "least sold"
                        ? t("sort by most sold")
                        : t("sort by least sold")}
                </Button>
            }
        >
            {values.length > 0 ? (
                <Table headerLabels={headerLabels} values={values} equalWidth />
            ) : (
                <div className="top-offers-no-offers-container">
                    <TextLabel>{t("no offers to show")}</TextLabel>
                </div>
            )}
        </Widget>
    );
}

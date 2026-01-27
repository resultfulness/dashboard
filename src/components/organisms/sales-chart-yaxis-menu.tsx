import { useTranslation } from "react-i18next";
import MenuItemList from "../molecules/menu-item-list";
import type { YAxis } from "./sales-chart-widget";

interface SalesChartYaxisMenuProps {
    onsetyaxis: (yaxis: YAxis) => void;
}

export default function SalesChartYaxisMenu({
    onsetyaxis,
}: SalesChartYaxisMenuProps) {
    const { t } = useTranslation();

    return (
        <MenuItemList
            items={[
                {
                    label: t("turnover"),
                    onclick: () => onsetyaxis("turnover"),
                },
                {
                    label: t("amount sold"),
                    onclick: () => onsetyaxis("amount sold"),
                },
            ]}
        />
    );
}

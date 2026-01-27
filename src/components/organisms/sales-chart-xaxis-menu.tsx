import { useTranslation } from "react-i18next";
import MenuItemList from "../molecules/menu-item-list";
import type { XAxis } from "./sales-chart-widget";

interface SalesChartXaxisMenuProps {
    onsetxaxis: (xaxis: XAxis) => void;
}

export default function SalesChartXaxisMenu({
    onsetxaxis,
}: SalesChartXaxisMenuProps) {
    const { t } = useTranslation();

    return (
        <MenuItemList
            items={[
                {
                    label: t("today"),
                    onclick: () => onsetxaxis("today"),
                },
                {
                    label: t("this week"),
                    onclick: () => onsetxaxis("this week"),
                },
                {
                    label: t("previous week"),
                    onclick: () => onsetxaxis("previous week"),
                },
            ]}
        />
    );
}

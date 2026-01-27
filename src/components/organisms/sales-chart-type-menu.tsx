import { useTranslation } from "react-i18next";
import type { GraphType } from "../molecules/chart";
import MenuItemList from "../molecules/menu-item-list";

interface SalesChartTypeMenuProps {
    onsettype: (type: GraphType) => void;
}

export default function SalesChartTypeMenu({
    onsettype,
}: SalesChartTypeMenuProps) {
    const { t } = useTranslation();

    return (
        <MenuItemList
            items={[
                {
                    label: t("bar chart"),
                    onclick: () => onsettype("bar chart"),
                },
                {
                    label: t("line chart"),
                    onclick: () => onsettype("line chart"),
                },
            ]}
        />
    );
}

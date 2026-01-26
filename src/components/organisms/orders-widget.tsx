import { useTranslation } from "react-i18next";
import Widget from "../molecules/widget";
import HighlightCardArray from "../molecules/highlight-card-array";

interface OrdersWidgetProps {
    data: {
        unpaid: number;
        unsent: number;
        returns: number;
    };
}

export default function OrdersWidget({ data }: OrdersWidgetProps) {
    const { t } = useTranslation();

    return (
        <Widget title={t("orders")}>
            <HighlightCardArray
                entries={[
                    { label: t("unpaid"), value: data.unpaid },
                    { label: t("unsent"), value: data.unsent },
                    { label: t("returns"), value: data.returns },
                ]}
            />
        </Widget>
    );
}

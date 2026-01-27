import { useTranslation } from "react-i18next";
import Widget from "../molecules/widget";
import HighlightCardArray from "../molecules/highlight-card-array";
import { useNavigate } from "react-router";
import type { Dashboard } from "../../contexts/dashboard";

interface OrdersWidgetProps {
    data: Dashboard["orders"];
}

export default function OrdersWidget({ data }: OrdersWidgetProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Widget title={t("orders")}>
            <HighlightCardArray
                entries={[
                    {
                        label: t("unpaid"),
                        value: data.unpaid,
                        onclick: () => navigate("/orders/unpaid"),
                    },
                    {
                        label: t("unsent"),
                        value: data.unsent,
                        onclick: () => navigate("/orders/unsent"),
                    },
                    {
                        label: t("returns"),
                        value: data.returns,
                        onclick: () => navigate("/orders/returns"),
                    },
                ]}
            />
        </Widget>
    );
}

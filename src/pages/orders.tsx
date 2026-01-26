import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router";

interface OrdersProps {
    type?: "unpaid" | "unsent" | "returns";
}

export default function Orders({ type }: OrdersProps) {
    const { t } = useTranslation();
    const { setTitle } = useOutletContext();

    useEffect(() => {
        if (type) {
            setTitle(`${t("orders")}/${t(type)}`)
            return;
        }
        setTitle(t("orders"));
    }, [setTitle, t, type]);

    return <div>orders{type && `/${type}`}</div>;
}

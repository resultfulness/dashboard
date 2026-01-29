import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router";

export default function Reviews() {
    const { t } = useTranslation();
    const { setTitle } = useOutletContext();

    useEffect(() => {
        setTitle(t("reviews"));
    }, [setTitle, t]);

    return <div>"maslo"</div>;
}

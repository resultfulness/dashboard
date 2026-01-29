import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router";

export default function Assessment() {
    const { t } = useTranslation();
    const { setTitle } = useOutletContext();

    useEffect(() => {
        setTitle(t("assessment"));
    }, [setTitle, t]);

    return <div>"maslo"</div>;
}

import { useTranslation } from "react-i18next";

export default function Reviews() {
    const { t } = useTranslation();

    return <div>{t("reviews")}</div>;
}

import "./login-form.css";
import { useTranslation } from "react-i18next";
import TextHeading from "../atoms/text-heading";
import FormField from "../molecules/form-field";
import Button from "../atoms/button";

export default function LoginForm() {
    const { t } = useTranslation();

    return (
        <form className="login-form">
            <TextHeading level={1}>{t("login to the dashboard")}</TextHeading>
            <FormField label={t("username")} />
            <FormField label={t("password")} />
            <Button>{t("log in")}</Button>
        </form>
    );
}

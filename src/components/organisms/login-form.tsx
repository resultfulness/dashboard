import "./login-form.css";
import { useTranslation } from "react-i18next";
import TextHeading from "../atoms/text-heading";
import FormField from "../molecules/form-field";
import Button from "../atoms/button";
import type { FormEvent } from "react";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router";

export default function LoginForm() {
    const { t } = useTranslation();
    const auth = useAuth();
    const navigate = useNavigate();

    function handleLogin(e: FormEvent) {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);

        const username = fd.get("username")?.toString();
        const password = fd.get("password")?.toString();

        if (!username || !password) {
            return;
        }

        auth.login(username, password);
        navigate("/");
    }

    return (
        <form className="login-form" onSubmit={handleLogin}>
            <TextHeading level={1}>{t("login to the dashboard")}</TextHeading>
            <FormField
                label={t("username")}
                inputProps={{
                    name: "username",
                }}
            />
            <FormField
                label={t("password")}
                inputProps={{
                    name: "password",
                    type: "password",
                }}
            />
            <Button>{t("log in")}</Button>
        </form>
    );
}

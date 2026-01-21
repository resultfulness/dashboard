import "./page-header.css";
import { useTranslation } from "react-i18next";
import Button from "../atoms/button";
import { useNavigate } from "react-router";
import Icon from "../atoms/icon";
import TextPageTitle from "../atoms/text-page-title";
import Dropdown from "../atoms/dropdown";
import Avatar from "../atoms/avatar";
import IconButton from "../molecules/icon-button";
import theme from "../../theme";
import Separator from "../atoms/separator";

interface PageHeaderProps {
    withBacklink?: boolean;
    title: string;
}

export default function PageHeader({
    withBacklink = false,
    title,
}: PageHeaderProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <header className="page-header">
            {withBacklink ? (
                <Button onclick={() => navigate("/")} variant="secondary">
                    <Icon icon="arrow-left" />
                    {t("back to dashboard")}
                </Button>
            ) : (
                <div></div>
            )}
            <TextPageTitle>{title}</TextPageTitle>
            <div className="page-header-right">
                <Dropdown label={t("accounts")} />
                <Avatar />
                <Separator />
                <Dropdown label="EN" />
                <IconButton
                    onclick={() => theme.toggle()}
                    icon={theme.get() === "light" ? "moon" : "sun"}
                />
            </div>
        </header>
    );
}

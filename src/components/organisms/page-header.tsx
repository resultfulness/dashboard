import "./page-header.css";
import { useTranslation } from "react-i18next";
import Button from "../atoms/button";
import { useNavigate } from "react-router";
import Icon from "../atoms/icon";
import TextPageTitle from "../atoms/text-page-title";
import Dropdown from "../atoms/dropdown";
import Avatar from "../atoms/avatar";
import IconButton from "../molecules/icon-button";
import { useTheme } from "../../contexts/theme";
import Separator from "../atoms/separator";
import LanguageSelectMenu from "./language-select-menu";
import { useState } from "react";

interface PageHeaderProps {
    withBacklink?: boolean;
    title: string;
}

export default function PageHeader({
    withBacklink = false,
    title,
}: PageHeaderProps) {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { theme, toggle } = useTheme();
    const [showLangMenu, setShowLangMenu] = useState(false);

    return (
        <header className="page-header">
            <div>
                {withBacklink && (
                    <Button onclick={() => navigate("/")} variant="secondary">
                        <Icon icon="arrow-left" />
                        {t("back to dashboard")}
                    </Button>
                )}
            </div>
            <TextPageTitle>{title}</TextPageTitle>
            <div className="page-header-right">
                <Dropdown
                    label={t("accounts")}
                    onchangeopen={() => {}}
                />
                <Avatar />
                <Separator />
                <Dropdown
                    label={i18n.language.toUpperCase()}
                    onchangeopen={open => setShowLangMenu(open)}
                    width="64px"
                />
                <IconButton
                    onclick={() => toggle()}
                    icon={theme === "light" ? "moon" : "sun"}
                />
                <div className="language-select-menu-container">
                    {showLangMenu && <LanguageSelectMenu />}
                </div>
            </div>
        </header>
    );
}

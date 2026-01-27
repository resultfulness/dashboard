import { useTranslation } from "react-i18next";
import MenuItemList from "../molecules/menu-item-list";

export default function LanguageSelectMenu() {
    const { i18n } = useTranslation();

    return (
        <MenuItemList
            items={[
                {
                    label: "English",
                    image: "🇬🇧",
                    onclick: () => i18n.changeLanguage("en"),
                },
                {
                    label: "Polski",
                    image: "🇵🇱",
                    onclick: () => i18n.changeLanguage("pl"),
                },
            ]}
        />
    );
}

import { Outlet } from "react-router";
import Subpage from "../components/templates/subpage";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function SubpageLayout() {
    const { t } = useTranslation();
    const [title, setTitle] = useState(t("dashboard"));

    return (
        <Subpage title={title}>
            <Outlet context={{ setTitle }} />
        </Subpage>
    );
}

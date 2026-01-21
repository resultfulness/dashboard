import "./dropdown.css";
import theme from "../../theme";
import Icon from "./icon";
import { useState } from "react";

interface DropdownProps {
    label: string;
}

export default function Dropdown({ label }: DropdownProps) {
    const [active, setactive] = useState(false);

    return (
        <button
            className={`dropdown ${active ? "dropdown-active" : ""}`}
            onClick={() => setactive(!active)}
        >
            <Icon icon={active ? "arrow-up" : "arrow-down"} />
            <span>{label}</span>
        </button>
    );
}

import "./dropdown.css";
import Icon from "./icon";
import { useEffect, useState } from "react";

interface DropdownProps {
    label: string;
    onchangeopen: (open: boolean) => void;
    width?: string;
}

export default function Dropdown({
    label,
    onchangeopen,
    width,
}: DropdownProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        onchangeopen(open);
    }, [open]);

    return (
        <button
            className={`dropdown ${open ? "dropdown-active" : ""}`}
            onClick={() => setOpen(!open)}
            style={{ width }}
        >
            <Icon icon={open ? "arrow-up" : "arrow-down"} />
            <span>{label}</span>
        </button>
    );
}

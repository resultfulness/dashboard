import type { ChangeEvent } from "react";
import "./input.css";

interface InputProps {
    value?: string;
    name?: string;
    placeholder?: string;
    onchange?: () => void;
}

export default function Input({
    value,
    name,
    placeholder,
    onchange,
}: InputProps) {
    return (
        <input
            className="input"
            type="text"
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onchange}
        />
    );
}

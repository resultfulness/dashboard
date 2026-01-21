import type { HTMLInputTypeAttribute } from "react";
import "./input.css";

export interface InputProps {
    value?: string;
    name?: string;
    placeholder?: string;
    onchange?: () => void;
    type?: HTMLInputTypeAttribute;
}

export default function Input({
    value,
    name,
    placeholder,
    onchange,
    type = "text",
}: InputProps) {
    return (
        <input
            className="input"
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onchange}
        />
    );
}

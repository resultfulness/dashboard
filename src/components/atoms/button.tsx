import "./button.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onclick?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    variant = "primary",
    onclick,
    type,
}: ButtonProps) {
    return (
        <button
            className={`button button-${variant}`}
            type={type}
            onClick={onclick}
        >
            {children}
        </button>
    );
}

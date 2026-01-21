import "./button.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onclick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    onclick,
    type,
    className,
}: ButtonProps) {
    return (
        <button
            className={`button
                        button-${variant}
                        ${className ? `button-${className}` : ""}`}
            type={type}
            onClick={onclick}
        >
            {children}
        </button>
    );
}

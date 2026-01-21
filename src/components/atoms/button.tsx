import "./button.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onclick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    onclick,
}: ButtonProps) {
    return (
        <button className={`button button-${variant}`} onClick={onclick}>
            {children}
        </button>
    );
}

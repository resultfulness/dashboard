import "./highlight-card.css";
import TextLabel from "../atoms/text-label";
import TextHuge from "../atoms/text-huge";

interface HighlightCardProps {
    value: number;
    label: string;
    onclick?: () => void;
}

export default function HighlightCard({
    label,
    value,
    onclick,
}: HighlightCardProps) {
    return (
        <>
            {onclick === undefined ? (
                <div
                    className={`highlight-card ${value > 10 ? "highlight-card-highlight" : ""}`}
                >
                    <TextLabel>{label}</TextLabel>
                    <div className="highlight-card-value">
                        <TextHuge>{value}</TextHuge>
                    </div>
                </div>
            ) : (
                <button
                    className={`highlight-card ${value > 10 ? "highlight-card-highlight" : ""}`}
                    onClick={onclick}
                >
                    <TextLabel>{label}</TextLabel>
                    <div className="highlight-card-value">
                        <TextHuge>{value}</TextHuge>
                    </div>
                </button>
            )}
        </>
    );
}

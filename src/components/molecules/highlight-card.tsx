import "./highlight-card.css";
import TextLabel from "../atoms/text-label";
import TextHuge from "../atoms/text-huge";

export interface HighlightCardProps {
    value: number | string;
    label: string;
    onclick?: () => void;
    slim?: boolean;
}

export default function HighlightCard({
    label,
    value,
    onclick,
    slim,
}: HighlightCardProps) {
    return (
        <>
            {onclick === undefined ? (
                <div
                    className={`highlight-card ${typeof value === "number" && value > 10 ? "highlight-card-highlight" : ""}`}
                >
                    <TextLabel>{label}</TextLabel>
                    <div
                        className="highlight-card-value"
                    >
                        {slim === undefined || slim == false ? (
                            <TextHuge>{value}</TextHuge>
                        ) : (
                            <span className="highlight-card-value-slim">{value}</span>
                        )}
                    </div>
                </div>
            ) : (
                <button
                    className={`highlight-card ${typeof value === "number" && value > 10 ? "highlight-card-highlight" : ""}`}
                    onClick={onclick}
                >
                    <TextLabel>{label}</TextLabel>
                    <div
                        className="highlight-card-value"
                    >
                        {slim === undefined || slim == false ? (
                            <TextHuge>{value}</TextHuge>
                        ) : (
                            <span className="highlight-card-value-slim">{value}</span>
                        )}
                    </div>
                </button>
            )}
        </>
    );
}

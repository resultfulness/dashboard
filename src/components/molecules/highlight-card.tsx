import "./highlight-card.css";
import TextLabel from "../atoms/text-label";
import TextHuge from "../atoms/text-huge";

interface HighlightCardProps {
    value: number;
    label: string;
}

export default function HighlightCard({ label, value }: HighlightCardProps) {
    return (
        <div className={`highlight-card ${value > 10 ? "highlight-card-highlight" : ""}`}>
            <TextLabel>{label}</TextLabel>
            <div className="highlight-card-value">
                <TextHuge>{value}</TextHuge>
            </div>
        </div>
    );
}

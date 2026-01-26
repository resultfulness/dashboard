import "./highlight-card-array.css";
import HighlightCard from "./highlight-card";

interface HighlightCardArrayProps {
    entries: {
        label: string;
        value: number;
        onclick?: () => void;
    }[];
}

export default function HighlightCardArray({
    entries,
}: HighlightCardArrayProps) {
    return (
        <div
            className="highlight-card-array"
            style={{ gridTemplateColumns: `repeat(${entries.length}, 1fr)` }}
        >
            {entries.map(({ label, value, onclick }) => (
                <HighlightCard value={value} label={label} onclick={onclick} />
            ))}
        </div>
    );
}

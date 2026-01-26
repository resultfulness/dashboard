import "./highlight-card-array.css";
import HighlightCard from "./highlight-card";

interface HighlightCardArrayProps {
    entries: { label: string; value: number }[];
}

export default function HighlightCardArray({
    entries,
}: HighlightCardArrayProps) {
    return (
        <div
            className="highlight-card-array"
            style={{ gridTemplateColumns: `repeat(${entries.length}, 1fr)` }}
        >
            {entries.map(({ label, value }) => (
                <HighlightCard value={value} label={label} />
            ))}
        </div>
    );
}

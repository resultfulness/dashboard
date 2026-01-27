import "./highlight-card-array.css";
import HighlightCard, { type HighlightCardProps } from "./highlight-card";

interface HighlightCardArrayProps {
    entries: HighlightCardProps[];
}

export default function HighlightCardArray({
    entries,
}: HighlightCardArrayProps) {
    return (
        <div
            className="highlight-card-array"
            style={{ gridTemplateColumns: `repeat(${entries.length}, 1fr)` }}
        >
            {entries.map((entry, i) => (
                <HighlightCard
                    {...entry}
                    key={i}
                />
            ))}
        </div>
    );
}

import type { HighlightCardProps } from "./highlight-card";
import HighlightCard from "./highlight-card";

import "./highlight-card-grid.css"

interface HighlightCardGridProps {
    firstRow: HighlightCardProps[];
    secondRow: HighlightCardProps[];
    subheading: string;
}
export default function HighlightCardGrid({
    firstRow,
    secondRow,
    subheading,
}: HighlightCardGridProps) {
    return (
        <div className="highlight-card-grid">
            <div
                className="highlight-card-grid-row"
                style={{
                    gridTemplateColumns: `repeat(${firstRow.length}, 1fr)`,
                }}
            >
                {firstRow.map((entry, i) => (
                    <HighlightCard {...entry} key={i} />
                ))}
            </div>
            <span>{subheading}</span>
            <div
                className="highlight-card-grid-row"
                style={{
                    gridTemplateColumns: `repeat(${secondRow.length}, 1fr)`,
                }}
            >
                {secondRow.map((entry, i) => (
                    <HighlightCard {...entry} slim={true} key={i} />
                ))}
            </div>
        </div>
    );
}

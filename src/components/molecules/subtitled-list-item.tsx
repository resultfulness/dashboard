import "./subtitled-list-item.css";

export interface SubtitledListItemProps {
    label: string;
    text: string;
    subTitle: string;
    highlight: boolean;
}
export default function SubtitledListItem({
    label,
    text,
    subTitle,
    highlight,
}: SubtitledListItemProps) {
    return (
        <div
            className={`subtitled-list-item ${highlight ? "subtitled-list-item-highlight" : ""}`}
        >
            <div className="subtitled-list-item-label">{label}</div>
            <div className="subtitled-list-item-subtitle">{subTitle}</div>
            <div className="subtitled-list-item-text">{text}</div>
        </div>
    );
}

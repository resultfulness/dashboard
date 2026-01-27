import "./tab.css";
interface TabProps {
    value: string;
    highlight: boolean;
    onclick: () => void;
}

export default function Tab({ value, highlight, onclick }: TabProps) {
    return (
        <div
            className={`tab ${highlight ? "tab-highlight" : ""}`}
            onClick={onclick}
        >
            {value}
        </div>
    );
}

import "./chart-label.css";
import TextSubtitle from "./text-subtitle";
interface ChartLabelProps {
    slanted?: boolean;
    label: string;
}

export default function ChartLabel({ slanted, label }: ChartLabelProps) {
    return (
        <div className={`chart-label ${slanted ? "chart-label-slanted" : ""}`}>
            <TextSubtitle>{label}</TextSubtitle>
        </div>
    );
}

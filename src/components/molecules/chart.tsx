import "./chart.css";
import Dropdown, { type DropdownProps } from "../atoms/dropdown";
import Graph from "./graph";
import ChartDeco from "./chart-deco";

export type Datapoint = number;
export type GraphType = "bar chart" | "line chart";

interface ChartProps {
    datapoints: Datapoint[];
    settings: DropdownProps[];
    type: GraphType;
    legend: string[];
}

export default function Chart({ datapoints, settings, type, legend }: ChartProps) {
    const max = Math.max(...datapoints);

    return (
        <div className="chart">
            <div className="chart-graph">
                <Graph datapoints={datapoints} type={type} max={max} />
                <ChartDeco vertical={{min: 0, max }} horizontal={legend} />
            </div>
            <div
                className="chart-settings"
                style={{
                    gridTemplateColumns: `repeat(${settings.length}, 1fr)`,
                }}
            >
                {settings.map((s, i) => (
                    <Dropdown {...s} key={i} />
                ))}
            </div>
        </div>
    );
}

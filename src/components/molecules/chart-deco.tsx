import "./chart-deco.css";
import ChartLabel from "../atoms/chart-label";
interface ChartDecoProps {
    vertical: {
        min: number;
        max: number;
    };
    horizontal: string[];
}

export default function ChartDeco({ vertical, horizontal }: ChartDecoProps) {
    function precision(n: number, f: number = 2) {
        f = Math.pow(10, f);
        return "" + Math.round(n * f) / f;
    }

    const max = precision(vertical.max);
    const mid = precision((vertical.max + vertical.min) / 2);
    const min = precision(vertical.min);

    return (
        <div className="chart-deco">
            <div className="chart-deco-vertical">
                <ChartLabel label={max} />
                <ChartLabel label={mid} />
                <ChartLabel label={min} />
                <div className="chart-deco-yaxis"></div>
            </div>
            <div
                className="chart-deco-horizontal"
                style={{
                    gridTemplateColumns: `repeat(${horizontal.length}, 1fr)`,
                }}
            >
                {horizontal.map(label => (
                    <ChartLabel label={label} slanted key={label} />
                ))}
                <div className="chart-deco-xaxis"></div>
            </div>
        </div>
    );
}

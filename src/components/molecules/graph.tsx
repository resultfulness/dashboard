import "./graph.css";
import type { Datapoint, GraphType } from "./chart";

interface GraphProps {
    datapoints: Datapoint[];
    type: GraphType;
    max: Datapoint;
}

export default function Graph({ datapoints, type, max }: GraphProps) {
    function relativeHeight(datapoint: Datapoint, max: Datapoint) {
        return 100 * (datapoint / max);
    }

    function genPolylinePoints(datapoints: Datapoint[], max: Datapoint) {
        const step = 100 / (datapoints.length - 1);
        const points = datapoints.map((v, i) => {
            if (v == 0) return;
            const x = i * step;
            const y = 100 - relativeHeight(v, max);
            return x + "," + y;
        });

        return {
            points: points.slice(0, -1).join(" "),
            last: points.slice(-2).join(" "),
        };
    }

    const lineGraphPoints = genPolylinePoints(datapoints, max);

    return (
        <div className="graph">
            {type === "bar chart" ? (
                <div className="graph-bar-graph">
                    {datapoints.map((d, i) => (
                        <div
                            className="graph-bar"
                            style={{ height: relativeHeight(d, max) + "%" }}
                            key={i}
                        ></div>
                    ))}
                </div>
            ) : (
                <div className="graph-line-graph">
                    <svg
                        width="100%"
                        height="170"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polyline
                            points={lineGraphPoints.points}
                            fill="none"
                            stroke="var(--clr-outline)"
                            strokeWidth="1"
                        />
                        <polyline
                            points={lineGraphPoints.last}
                            fill="none"
                            stroke="var(--clr-primary)"
                            strokeWidth="1"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}

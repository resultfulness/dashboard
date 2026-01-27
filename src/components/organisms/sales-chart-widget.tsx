import "./sales-chart-widget.css";
import { useTranslation } from "react-i18next";
import Widget from "../molecules/widget";
import Chart, { type GraphType } from "../molecules/chart";
import { useEffect, useState } from "react";
import SalesChartTypeMenu from "./sales-chart-type-menu";
import SalesChartXaxisMenu from "./sales-chart-xaxis-menu";
import SalesChartYaxisMenu from "./sales-chart-yaxis-menu";
import {
    hourlyDatapoints,
    LEGEND_HOURS,
    LEGEND_WEEKDAYS,
    weeklyDatapoints,
} from "../../chart";
import type { Sale } from "../../contexts/dashboard";

interface SalesChartWidgetProps {
    data: Sale[];
}

export type XAxis = "today" | "this week" | "previous week";
export type YAxis = "turnover" | "amount sold";

export default function SalesChartWidget({ data }: SalesChartWidgetProps) {
    const { t } = useTranslation();

    const [xAxis, setXAxis] = useState<XAxis>("today");
    const [showXAxisMenu, setShowXAxisMenu] = useState(false);
    const [yAxis, setYAxis] = useState<YAxis>("amount sold");
    const [showYAxisMenu, setShowYAxisMenu] = useState(false);
    const [type, setType] = useState<GraphType>("bar chart");
    const [showTypeMenu, setShowTypeMenu] = useState(false);

    const [datapoints, setDatapoints] = useState(
        hourlyDatapoints(data, "amount sold")
    );
    const [legend, setLegend] = useState<string[]>(LEGEND_HOURS);

    useEffect(() => {
        if (xAxis === "today") {
            setDatapoints(hourlyDatapoints(data, yAxis));
            setLegend(LEGEND_HOURS);
        } else if (xAxis === "this week") {
            setDatapoints(weeklyDatapoints(data, false, yAxis));
            setLegend(LEGEND_WEEKDAYS.map(w => t(w + "_short")));
        } else if (xAxis === "previous week") {
            setDatapoints(weeklyDatapoints(data, true, yAxis));
            setLegend(LEGEND_WEEKDAYS.map(w => t(w + "_short")));
        }
    }, [xAxis, yAxis]);

    return (
        <div className="sales-chart-widget-container">
            <Widget title={t("sales chart")}>
                <Chart
                    datapoints={datapoints}
                    legend={legend}
                    settings={[
                        {
                            label: t(xAxis),
                            onchangeopen: setShowXAxisMenu,
                        },
                        {
                            label: t(yAxis),
                            onchangeopen: setShowYAxisMenu,
                        },
                        {
                            label: t(type),
                            onchangeopen: setShowTypeMenu,
                        },
                    ]}
                    type={type}
                />
            </Widget>
            <div className="sales-chart-xaxis-menu-container">
                {showXAxisMenu && <SalesChartXaxisMenu onsetxaxis={setXAxis} />}
            </div>
            <div className="sales-chart-yaxis-menu-container">
                {showYAxisMenu && <SalesChartYaxisMenu onsetyaxis={setYAxis} />}
            </div>
            <div className="sales-chart-type-menu-container">
                {showTypeMenu && <SalesChartTypeMenu onsettype={setType} />}
            </div>
        </div>
    );
}

import "./table.css"
import TableHeader from "./table-header";
import TableRow from "./table-row";

interface TableProps {
    headerLabels: string[];
    values: any[][];
    equalWidth?: boolean;
}

export default function Table({ headerLabels, values, equalWidth }: TableProps) {
    if (values.some(v => v.length !== headerLabels.length)) {
        throw new Error("invalid table");
    }

    return (
        <table className="table">
            <thead>
                <TableHeader labels={headerLabels} equalWidth={equalWidth} />
            </thead>
            <tbody>
                {values.map(v => (
                    <TableRow key={v[0]} values={v} />
                ))}
            </tbody>
        </table>
    );
}

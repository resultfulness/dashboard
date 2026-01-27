import TableCell from "../atoms/table-cell";

interface TableRowProps {
    values: any[];
}

export default function TableRow({ values }: TableRowProps) {
    return (
        <tr>
            {values.map(v => (
                <TableCell key={v}>{v}</TableCell>
            ))}
        </tr>
    );
}

import TableHeaderCell from "../atoms/table-header-cell";

interface TableHeaderProps {
    labels: string[];
    equalWidth?: boolean;
}
export default function TableHeader({ labels, equalWidth }: TableHeaderProps) {
    return (
        <tr>
            {labels.map(l => (
                <TableHeaderCell
                    key={l}
                    width={equalWidth ? `${100 / labels.length}%` : undefined}
                >
                    {l}
                </TableHeaderCell>
            ))}
        </tr>
    );
}

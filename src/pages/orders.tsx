interface OrdersProps {
    type?: "unpaid" | "unsent" | "returns";
}

export default function Orders({ type }: OrdersProps) {
    return <div>orders/{type}</div>;
}

import WidgetHeader from "./widget-header";
import "./widget.css";

interface WidgetProps {
    children: React.ReactNode;
    title: string;
    action?: React.ReactNode;
}

export default function Widget({ children, title, action }: WidgetProps) {
    return (
        <div className="widget">
            <WidgetHeader title={title} action={action} />
            <div className="widget-content">
                {children}
            </div>
        </div>
    );
}

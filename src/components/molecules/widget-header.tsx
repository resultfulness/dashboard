import "./widget-header.css";
import TextHeading from "../atoms/text-heading";

interface WidgetHeaderProps {
    title: string;
    action?: React.ReactNode;
}

export default function WidgetHeader({ title, action }: WidgetHeaderProps) {
    return <div className="widget-header">
        <TextHeading level={2}>{title}</TextHeading>
        {action}
    </div>;
}

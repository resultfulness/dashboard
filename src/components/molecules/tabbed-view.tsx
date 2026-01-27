import TabHeader from "./tab-header";
import Tab from "../atoms/tab.tsx";

interface TabbedViewProps {
    children: React.ReactNode;
    tabs: string[];
    highlight: number;
    onclick: (i: number) => void;
}
export default function TabbedView({
    children,
    tabs,
    highlight,
    onclick,
}: TabbedViewProps) {
    return (
        <div className="tabbed-view">
            <TabHeader>
                {tabs.map((tab, i) => (
                    <Tab
                        key={i}
                        value={tab}
                        highlight={i === highlight}
                        onclick={()=>{onclick(i)}}
                    />
                ))}
            </TabHeader>
            {children}
        </div>
    );
}

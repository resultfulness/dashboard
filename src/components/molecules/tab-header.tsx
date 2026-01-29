import "./tab-header.css"

interface TabHeaderProps {
    children: React.ReactNode;
}

export default function TabHeader({children}: TabHeaderProps) {
    return (
        <div className="tab-header">
            {children}
        </div>
    );
}

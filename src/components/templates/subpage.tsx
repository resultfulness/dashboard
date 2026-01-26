import "./subpage.css";
import PageHeader from "../organisms/page-header";

interface SubpageProps {
    title: string;
    children: React.ReactNode;
}

export default function Subpage({ children, title }: SubpageProps) {
    return <div className="subpage">
        <PageHeader title={title} withBacklink />
        <main className="subpage-content">
            {children}
        </main>
    </div>;
}

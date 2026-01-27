import "./menu-item.css";
export interface MenuItemProps {
    label: string;
    image?: React.ReactNode;
    onclick?: () => void;
}

export default function MenuItem({ label, image, onclick }: MenuItemProps) {
    return (
        <li>
            <button onClick={onclick} className="menu-item">
                <span>{label}</span>
                {image && image}
            </button>
        </li>
    );
}

import "./menu-item-list.css";
import type { MenuItemProps } from "../atoms/menu-item";
import MenuItem from "../atoms/menu-item";

interface MenuItemListProps {
    items: MenuItemProps[];
}

export default function MenuItemList({ items }: MenuItemListProps) {
    return (
        <ul className="menu-item-list">
            {items.map((item, i) => (
                <MenuItem {...item} key={i} />
            ))}
        </ul>
    );
}

import Avatar from "../atoms/avatar";
import MenuItemList from "../molecules/menu-item-list";

export default function AccountsMenu() {
    const accounts = [
        {
            label: "Computers",
            image: <Avatar />,
        },
        {
            label: "Software",
            image: <Avatar />,
        },
        {
            label: "Accessories",
            image: <Avatar />,
        },
    ];

    return <MenuItemList items={accounts} />;
}

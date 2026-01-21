import "./icon-button.css";
import Button from "../atoms/button";
import Icon, { type IconProps } from "../atoms/icon";

interface IconButtonProps {
    icon: IconProps["icon"];
    onclick?: () => void;
}

export default function IconButton({ icon, onclick }: IconButtonProps) {
    return (
        <Button variant="secondary" className="icon" onclick={onclick}>
            <Icon icon={icon} size={20} />
        </Button>
    );
}

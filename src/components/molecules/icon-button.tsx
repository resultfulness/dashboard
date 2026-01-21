import "./icon-button.css";
import theme from "../../theme";
import Button from "../atoms/button";
import Icon, { type IconProps } from "../atoms/icon";

interface IconButtonProps {
    icon: IconProps["icon"];
}

export default function IconButton({ icon }: IconButtonProps) {
    return (
        <Button variant="secondary" className="icon">
            <Icon icon={icon} theme={theme.get()} size={20} />
        </Button>
    );
}

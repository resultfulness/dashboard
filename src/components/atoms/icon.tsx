import { useTheme } from "../../contexts/theme";

export interface IconProps {
    icon:
        | "arrow-up"
        | "arrow-down"
        | "arrow-left"
        | "arrow-right"
        | "sort"
        | "sort-reverse"
        | "sun"
        | "moon";
    size?: number;
    theme?: "light" | "dark";
}

export default function Icon({
    icon,
    size = 16,
    theme = useTheme().theme,
}: IconProps) {
    function iconFile() {
        if (theme === "dark") {
            switch (icon) {
                case "arrow-up":
                    return "/arrow-up.svg";
                case "arrow-down":
                    return "/arrow-down.svg";
                case "arrow-left":
                    return "/arrow-left.svg";
                case "arrow-right":
                    return "/arrow-right.svg";
                case "sort":
                    return "/sort.svg";
                case "sort-reverse":
                    return "/sort-reverse.svg";
                case "sun":
                    return "/sun.svg";
                case "moon":
                    return "/moon.svg";
            }
        } else {
            switch (icon) {
                case "arrow-up":
                    return "/light--arrow-up.svg";
                case "arrow-down":
                    return "/light--arrow-down.svg";
                case "arrow-left":
                    return "/light--arrow-left.svg";
                case "arrow-right":
                    return "/light--arrow-right.svg";
                case "sort":
                    return "/light--sort.svg";
                case "sort-reverse":
                    return "/light--sort-reverse.svg";
                case "sun":
                    return "/light--sun.svg";
                case "moon":
                    return "/light--moon.svg";
            }
        }
    }
    return <img src={iconFile()} alt={icon} width={size} height={size} />;
}

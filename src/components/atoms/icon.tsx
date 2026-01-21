interface IconProps {
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
}

export default function Icon({ icon, size = 24 }: IconProps) {
    function iconFile() {
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
    }
    return <img src={iconFile()} alt={icon} width={size} height={size} />;
}

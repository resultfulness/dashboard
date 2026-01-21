import { useTheme } from "../../contexts/theme";

interface AvatarProps {
    theme?: "light" | "dark";
}

export default function Avatar({ theme = useTheme().theme }: AvatarProps) {
    return (
        <img
            src={theme === "light" ? "/light--avatar.svg" : "/avatar.svg"}
            alt="avatar"
        />
    );
}

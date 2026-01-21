import t from "../../theme";

interface AvatarProps {
    theme?: "light" | "dark";
}

export default function Avatar({ theme = t.get() }: AvatarProps) {
    return (
        <img
            src={theme === "light" ? "/light--avatar.svg" : "/avatar.svg"}
            alt="avatar"
        />
    );
}

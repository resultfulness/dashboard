import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContext = {
    theme: Theme;
    toggle: () => void;
};

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(init());

    function toggle() {
        let theme = document.documentElement.getAttribute("data-theme");
        if (theme === null || (theme !== "light" && theme !== "dark")) {
            throw new Error("theme invalid; call theme.init()");
        }
        let toggledTheme: Theme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", toggledTheme);
        localStorage.setItem("theme", toggledTheme);
        setTheme(toggledTheme);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggle,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

function init() {
    let theme: Theme = "light";

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
    }

    const t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") {
        theme = t;
    }

    document.documentElement.setAttribute("data-theme", theme);

    return theme;
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme outside of ThemeProvider");
    return context;
};

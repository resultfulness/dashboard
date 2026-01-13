function init() {
    let theme = "light";

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
    }

    const t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") {
        theme = t;
    }

    document.documentElement.setAttribute("data-theme", theme);
}

function toggle() {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === null || theme !== "light" && theme !== "dark") {
        throw new Error("theme invalid; call theme.init()");
    }
    theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

export default { init, toggle };

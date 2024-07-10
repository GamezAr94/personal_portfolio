// themeColors.js
const handleThemeClick = (theme) => {
    for (let property in themeColors[theme]) {
        let value = themeColors[theme][property];
        document.documentElement.style.setProperty(property, value);
    }
};
const themeColors = {
    red: {
        "--main-background-color": "rgb(48, 39, 37)",
        "--secondary-color": "rgb(68, 54, 54)",
        "--inner-container-color": "rgb(60, 47, 47)",
        "--darker-main-color": "rgb(43, 28, 35)",
        "--highlight-darker": "rgb(168, 47, 47)",
        "--tag-color": "rgb(253, 30, 1)",
        "--secondary-container-bg": "rgb(63, 38, 38)",
        "--font-color": "rgb(247, 240, 221)",
        "--menu-btn-color": "white",
        "--contact-btn-color": "rgb(200, 31, 22)",

        "--theme-hero-img-red": "flex",
        "--theme-hero-img-blue": "none",
        "--theme-hero-img-green": "none",
    },
    blue: {
        "--main-background-color": "rgb(36, 37, 41)",
        "--secondary-color": "rgb(57, 60, 67)",
        "--inner-container-color": "rgb(45, 48, 55)",
        "--darker-main-color": "rgb(28, 36, 43)",
        "--highlight-darker": "rgb(67, 47, 168)",
        "--tag-color": "rgb(1, 177, 253)",
        "--secondary-container-bg": "rgb(38, 45, 63)",
        "--font-color": "rgb(247, 240, 221)",
        "--menu-btn-color": "white",
        "--contact-btn-color": "rgb(200, 117, 22)",

        "--theme-hero-img-red": "none",
        "--theme-hero-img-blue": "flex",
        "--theme-hero-img-green": "none",
    },
    green: {
        "--main-background-color": "rgb(36, 41, 36)",
        "--secondary-color": "rgb(57, 67, 57)",
        "--inner-container-color": "rgb(45, 55, 45)",
        "--darker-main-color": "rgb(28, 43, 28)",
        "--highlight-darker": "rgb(168, 105, 47)",
        "--tag-color": "rgb(253, 137, 1)",
        "--secondary-container-bg": "rgb(63, 54, 38)",
        "--font-color": "rgb(247, 240, 221)",
        "--menu-btn-color": "white",
        "--contact-btn-color": "rgb(111, 200, 22)",

        "--theme-hero-img-red": "none",
        "--theme-hero-img-blue": "none",
        "--theme-hero-img-green": "flex",
    },
};
export default handleThemeClick;

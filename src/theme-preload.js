const currentTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const isDark = currentTheme === "dark" || (!currentTheme && systemTheme);

if (isDark) {
  document.documentElement.classList.add("dark");
}

import { useState } from "react";
import "./ThemeSelector.css";

export default function ThemeSelector() {
  const [theme, setTheme] = useState<string>(localStorage["theme"]);
  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage["theme"] = newTheme;
    setTheme(newTheme);
    document.documentElement.className = "theme-" + newTheme;
  };
  document.documentElement.className = "theme-" + theme;
  return (
    <button className="theme-selector" onClick={toggle}>
      {theme}
    </button>
  );
}

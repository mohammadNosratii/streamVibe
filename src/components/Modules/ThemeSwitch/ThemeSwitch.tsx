import { useTheme } from "next-themes";
import SunIcon from "../../../assets/icons/Sun";
import MoonIcon from "../../../assets/icons/Moon";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const switchThemeHandler = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        break;
      }
      case "dark": {
        setTheme("light");
        break;
      }
    }
  };

  return (
    <li onClick={switchThemeHandler} className="flex items-center gap-1">
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
      <span>Switch To {theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </li>
  );
}

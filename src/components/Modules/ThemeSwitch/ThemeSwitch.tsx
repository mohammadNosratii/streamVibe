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
    <div onClick={switchThemeHandler} className="bg-mainLight/20 rounded-md backdrop-blur-sm p-2 mx-3 cursor-pointer flex items-center gap-2">
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
      <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
}

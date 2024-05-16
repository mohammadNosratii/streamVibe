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
    <div
      onClick={switchThemeHandler}
      className="py-2 px-2 md:py-[11px] md:px-[11px] 2xl:py-4 2xl:px-4 md:border-2 dark:border-black-15 rounded-full bg-gray-85 dark:bg-black-10 cursor-pointer"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}

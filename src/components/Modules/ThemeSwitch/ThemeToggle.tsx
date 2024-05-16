import { useTheme } from "next-themes";
import MoonIcon from "../../../assets/icons/Moon";
import SunIcon from "../../../assets/icons/Sun";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    switch (theme) {
      case "light": {
        return setTheme("dark");
      }
      case "dark": {
        return setTheme("light");
      }
      default: {
        break;
      }
    }
  };

  return (
    <div
      className="hidden md:block py-[11px] px-[11px] 2xl:py-4 2xl:px-4 border-2 dark:border-black-15 rounded-full bg-gray-85 dark:bg-black-10 cursor-pointer"
      onClick={changeThemeHandler}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </div>
  );
}

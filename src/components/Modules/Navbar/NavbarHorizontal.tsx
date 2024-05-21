import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@nextui-org/react";
import logo from "/icons/logo-desktop.svg";
import menuIcon from "/icons/bars-3.svg";
import { useEffect, useState } from "react";
import Search from "../../../assets/icons/Search";
import PopOver from "../PopOver/PopOver";
import {
  SerachPopOverContent,
  UserPopOverContent,
} from "../PopOverContent/PopOverContent";
import { UserPopOverTrigger } from "../PopOverTrigger/PopOverTrigger";
import { navbarHorizontalItems } from "../../../constants/navbarItems";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

export default function NavbarHorizontal({
  triggerNavbarVertical,
}: {
  triggerNavbarVertical: () => void;
}) {
  const [isNavbarSticky, setIsNavbarSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50 && !isNavbarSticky) {
        setIsNavbarSticky(true);
      } else if (window.scrollY < 50 && isNavbarSticky) {
        setIsNavbarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, [isNavbarSticky]);

  return (
    <NextUINavbar
      className={`z-50 py-3 transition-all fixed bg-gradient-to-b from-black-6 to-black-6/0 ${isNavbarSticky
          ? `backdrop-blur-sm bg-black-6/20 backdrop-saturate-[1.5]`
          : `backdrop-blur-none bg-transparent backdrop-saturate-[1]`
        }`}
      classNames={{
        wrapper: ["max-w-[90%]"],
      }}
    >
      <NavbarBrand>
        <Image
          className="w-28 h-12 lg:w-36 2xl:w-40 3xl:w-48 3xl:h-14"
          src={logo}
          alt=""
        />
      </NavbarBrand>
      <NavbarContent
        className="hidden md:flex items-center gap-4 2xl:gap-7.5 bg-white/10 backdrop-blur px-2.5 lg:px-3 xl:px-4 py-2 xl:py-2 2xl:px-4.5 2xl:py-2.5 rounded-xl border-1 border-gray-85/30 dark:border-black-12"
        justify="center"
      >
        {navbarHorizontalItems.map((item, index) => (
          <NavbarItem
            className={
              item.route === window.location.pathname
                ? "bg-mainLight dark:bg-black-10 py-1 px-3 lg:py-1.5 lg:px-4 xl:py-2 xl:px-5 2xl:px-6 rounded-lg border-1 border-transparent"
                : ""
            }
            key={index}
          >
            <Link
              href={item.route}
              className={`${item.route === window.location.pathname ? "text-black dark:text-white font-manropeMedium" : "text-gray-75 font-manropeRegular"} text-sm lg:text-base`}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent
        className="flex items-center gap-2 2xl:gap-3.5"
        justify="end"
      >
        <NavbarItem className="hidden md:inline-block">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="flex items-center gap-3">
          <PopOver content={<SerachPopOverContent />}>
            <div className="py-[11px] px-[11px] md:py-3 md:px-3 border-2 dark:border-black-15 rounded-full bg-gray-85 dark:bg-black-10 cursor-pointer">
              <Search />
            </div>
          </PopOver>
          <div
            className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-85 dark:bg-black-10 border-2 dark:border-black-15 rounded-lg cursor-pointer"
            onClick={triggerNavbarVertical}
          >
            <Image alt="" src={menuIcon} className="w-6 h-6 md:hidden" />
          </div>
        </NavbarItem>
        <NavbarItem className="hidden md:inline-block">
          <PopOver content={<UserPopOverContent />}>
            <span className="flex items-center justify-center">
              <UserPopOverTrigger />
            </span>
          </PopOver>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}

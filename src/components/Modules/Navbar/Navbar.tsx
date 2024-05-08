import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@nextui-org/react";
import logo from "/icons/logo-desktop.svg";
import searchIcon from "/icons/magnifying-glass.svg";
import notificationIcon from "/icons/bell.svg";
import menuIcon from "/icons/bars-3.svg";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isNavbarSticky, setIsNavbarSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100 && !isNavbarSticky) {
        setIsNavbarSticky(true);
      } else if (window.scrollY < 100 && isNavbarSticky) {
        console.log("trigger");
        setIsNavbarSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, [isNavbarSticky]);

  return (
    <NextUINavbar
      className={`z-50 py-3 transition-all ${isNavbarSticky ? `backdrop-blur-sm backdrop-saturate-[1.5] fixed shownAnimation` : `backdrop-blur-none bg-transparent backdrop-saturate-[1] absolute`}`}
    >
      <NavbarBrand>
        <Image
          className="w-28 h-12 2xl:w-40 2xl:h-12 3xl:w-48 3xl:h-14"
          src={logo}
          alt=""
        />
      </NavbarBrand>
      <NavbarContent
        className="hidden md:flex items-center gap-4 2xl:gap-7.5 bg-black-6 py-2 ps-2 pe-8 2xl:py-2.5 2xl:ps-2.5 2xl:pe-10 rounded-xl border-4 border-black-12"
        justify="center"
      >
        <NavbarItem className="bg-black-10 py-2 px-5 2xl:py-1.5 2xl:px-6 rounded-lg border-1 border-transparent">
          <Link href="#" className="text-white font-manropeMedium">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-gray-75 font-manropeRegular">
            Movies & Shows
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-gray-75 font-manropeRegular">
            Support
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-gray-75 font-manropeRegular">
            Subscription
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="flex items-center gap-4 3xl:gap-7.5"
        justify="end"
      >
        <NavbarItem className="hidden md:block">
          <Image alt="" src={searchIcon} className="w-6 h-6 3xl:w-8 3xl:h-8" />
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Image
            alt=""
            src={notificationIcon}
            className="w-6 h-6 3xl:w-8 3xl:h-8"
          />
        </NavbarItem>
        <NavbarItem className="block md:hidden">
          <Image alt="" src={menuIcon} className="w-6 h-6 3xl:w-8 3xl:h-8" />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}

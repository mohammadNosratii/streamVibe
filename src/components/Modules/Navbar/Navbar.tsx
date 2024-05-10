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
import "./Navbar.css";
import SearchForm from "../SearchInput/SearchForm";
import Search from "../../../assets/icons/Search";
import PopOver from "../PopOver/PopOver";

export default function Navbar() {
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
      className={`z-50 py-3 max-w- transition-all ${
        isNavbarSticky
          ? `backdrop-blur-sm backdrop-saturate-[1.5] shownAnimation fixed`
          : `backdrop-blur-none bg-transparent backdrop-saturate-[1] absolute`
      }`}
      classNames={{
        wrapper: ["max-w-[90%]"],
      }}
    >
      <NavbarBrand>
        <Image
          className="w-28 h-12 2xl:w-40 2xl:h-12 3xl:w-48 3xl:h-14"
          src={logo}
          alt=""
        />
      </NavbarBrand>
      <NavbarContent
        className="hidden h-auto md:flex items-center gap-4 2xl:gap-7.5 bg-black-6 py-1 ps-1 pe-5 lg:py-1.5 lg:ps-1.5 lg:pe-6 xl:py-2 xl:ps-2 xl:pe-8 2xl:py-2.5 2xl:ps-2.5 2xl:pe-10 rounded-xl border-4 border-black-12"
        justify="center"
      >
        <NavbarItem className="bg-black-10 py-1 px-3 lg:py-1.5 lg:px-4 xl:py-2 xl:px-5 2xl:py-1.5 2xl:px-6 rounded-lg border-1 border-transparent">
          <Link
            href="#"
            className="text-sm lg:text-base text-white font-manropeMedium"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-sm lg:text-base text-gray-75 font-manropeRegular"
          >
            Movies & Shows
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-sm lg:text-base text-gray-75 font-manropeRegular"
          >
            Support
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-sm lg:text-base text-gray-75 font-manropeRegular"
          >
            Subscription
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="flex items-center gap-2 3xl:gap-7.5"
        justify="end"
      >
        <NavbarItem className="hidden lg:block">
          <SearchForm />
        </NavbarItem>
        <NavbarItem className="flex items-center gap-3">
          <span className="lg:hidden">
            <Search />
          </span>
          <Image
            alt=""
            src={menuIcon}
            className="w-6 h-6 3xl:w-8 3xl:h-8 md:hidden"
          />
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <PopOver />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}

import { navbarVerticalItems } from "../../../constants/navbarItems";
import { Image, Divider } from "@nextui-org/react";
import logo from "/icons/logo-mobile.svg";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { navbarVerticalProps } from "../../../interfaces/navbarVerticalProps.interface";
import { Link } from "@tanstack/react-router";

export default function NavbarVertical({
  isNavbarShown,
  triggerNavbarVertical,
}: navbarVerticalProps) {
  return (
    <>
      {isNavbarShown && (
        <div
          onClick={triggerNavbarVertical}
          className="fixed md:hidden inset-0 bg-black-6/80 z-40"
        ></div>
      )}
      <div
        className={`w-[220px] fixed ${
          isNavbarShown ? "left-0" : "-left-96"
        } h-screen bg-white/60 dark:bg-black-6/50 backdrop-blur-2xl z-50 transition-all duration-500 pt-6 pb-2 px-3 flex flex-col justify-between md:hidden`}
      >
        <div>
          <div className="flex items-center justify-between">
            <Image src={logo} alt="" />
            <ThemeSwitch />
          </div>
          <Divider className="my-3" />
          <ul className="space-y-2 mb-4">
            {navbarVerticalItems.map((item, index) => (
              <li key={index}>
                <Link
                  className={
                    item.route === window.location.pathname
                      ? "text-red-45 text-xl"
                      : "text-black-6 dark:text-white hover:text-black-12 transition-all text-lg"
                  }
                  to={item.route}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

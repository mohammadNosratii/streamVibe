import { useState } from "react";
import NavbarHorizontal from "./NavbarHorizontal";
import NavbarVertical from "./NavbarVertical";
import "./Navbar.css";

export default function Navbar() {
  const [showNavbarVertical, setShowNavbarVertical] = useState(false);

  const triggerNavbarVerticalHandler = () => {
    setShowNavbarVertical(!showNavbarVertical);
  };

  return (
    <>
      <NavbarHorizontal triggerNavbarVertical={triggerNavbarVerticalHandler} />
      <NavbarVertical
        isNavbarShown={showNavbarVertical}
        setShowNavbarVertical={setShowNavbarVertical}
      />
    </>
  );
}

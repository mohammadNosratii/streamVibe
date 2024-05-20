import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Modules/Navbar/Navbar";
import Footer from "../components/Modules/Footer/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ),
});

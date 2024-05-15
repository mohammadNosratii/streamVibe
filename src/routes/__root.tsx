import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Modules/Navbar/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
});

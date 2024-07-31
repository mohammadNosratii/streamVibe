import { createLazyFileRoute } from "@tanstack/react-router";
import Home from "../pages/home/index";

export const Route = createLazyFileRoute("/_main/")({
  component: () => (
    <>
      <Home />
    </>
  ),
});

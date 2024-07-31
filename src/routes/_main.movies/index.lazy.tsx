import { createLazyFileRoute } from "@tanstack/react-router";
import Movies from "../../pages/movies";

export const Route = createLazyFileRoute("/_main/movies/")({
  component: () => <Movies />,
});

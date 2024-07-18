import { createLazyFileRoute } from "@tanstack/react-router";
import DashboardComments from "../../pages/dashboard/comments";

export const Route = createLazyFileRoute("/dashboard/comments")({
  component: () => <DashboardComments />,
});

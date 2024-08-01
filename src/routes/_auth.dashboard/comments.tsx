import { createFileRoute } from "@tanstack/react-router";
import DashboardComments from "../../pages/dashboard/comments";

export const Route = createFileRoute("/_auth/dashboard/comments")({
  component: () => <DashboardComments />,
});

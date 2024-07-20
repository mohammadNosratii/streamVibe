import { createFileRoute } from "@tanstack/react-router";
import DashboardComments from "../../pages/dashboard/comments";

export const Route = createFileRoute("/dashboard/_auth/comments")({
  component: () => <DashboardComments />,
});

import { createFileRoute } from "@tanstack/react-router";
import DashboardTickets from "../../pages/dashboard/tickets";

export const Route = createFileRoute("/dashboard/_auth/tickets")({
  component: () => (
    <DashboardTickets />
  ),
});

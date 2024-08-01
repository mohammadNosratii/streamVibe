import { createFileRoute } from "@tanstack/react-router";
import DashboardTickets from "../../pages/dashboard/tickets";

export const Route = createFileRoute("/_auth/dashboard/tickets")({
  component: () => (
    <DashboardTickets />
  ),
});

import { createLazyFileRoute } from "@tanstack/react-router";
import DashboardTickets from "../../pages/dashboard/tickets";

export const Route = createLazyFileRoute("/_auth/dashboard/tickets")({
  component: () => (
    <DashboardTickets />
  ),
});

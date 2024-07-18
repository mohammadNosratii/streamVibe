import { createLazyFileRoute } from "@tanstack/react-router";
import DashboardTickets from "../../pages/dashboard/tickets";

export const Route = createLazyFileRoute("/dashboard/tickets")({
  component: () => (
    <DashboardTickets />
  ),
});

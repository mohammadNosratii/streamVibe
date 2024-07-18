import { createLazyFileRoute } from "@tanstack/react-router";
import Dashboard from "../../pages/dashboard";

export const Route = createLazyFileRoute("/dashboard/tickets")({
  component: () => (
    <Dashboard>
      Welcome to Tickets
    </Dashboard>
  ),
});

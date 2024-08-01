import { createFileRoute } from "@tanstack/react-router";
import DashboardPayments from "../../pages/dashboard/payments";

export const Route = createFileRoute("/_auth/dashboard/payments")({
  component: () => <DashboardPayments />,
});

import { createLazyFileRoute } from "@tanstack/react-router";
import DashboardPayments from "../../pages/dashboard/payments";

export const Route = createLazyFileRoute("/_auth/dashboard/payments")({
  component: () => <DashboardPayments />,
});

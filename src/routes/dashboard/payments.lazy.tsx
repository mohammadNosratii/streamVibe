import { createLazyFileRoute } from "@tanstack/react-router";
import DashboardPayments from "../../pages/dashboard/[payments]";

export const Route = createLazyFileRoute("/dashboard/payments")({
  component: () => <DashboardPayments />,
});

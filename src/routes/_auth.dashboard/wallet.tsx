import { createFileRoute } from "@tanstack/react-router";
import DashboardWallet from "../../pages/dashboard/wallet";

export const Route = createFileRoute("/_auth/dashboard/wallet")({
  component: () => <DashboardWallet />,
});

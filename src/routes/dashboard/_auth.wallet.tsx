import { createFileRoute } from "@tanstack/react-router";
import DashboardWallet from "../../pages/dashboard/wallet";

export const Route = createFileRoute("/dashboard/_auth/wallet")({
  component: () => <DashboardWallet />,
});

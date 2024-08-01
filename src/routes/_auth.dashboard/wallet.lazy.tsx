import { createLazyFileRoute } from "@tanstack/react-router";
import DashboardWallet from "../../pages/dashboard/wallet";

export const Route = createLazyFileRoute("/_auth/dashboard/wallet")({
  component: () => <DashboardWallet />,
});

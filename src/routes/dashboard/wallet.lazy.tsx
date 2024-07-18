import { createLazyFileRoute } from "@tanstack/react-router";
import Dashboard from "../../pages/dashboard";

export const Route = createLazyFileRoute("/dashboard/wallet")({
  component: () => (
    <Dashboard>
      Welcome to Wallet
    </Dashboard>
  )
});

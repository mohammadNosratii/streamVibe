import { createFileRoute } from "@tanstack/react-router";
import DashboardEditInfo from "../../pages/dashboard/editInfo";

export const Route = createFileRoute("/dashboard/_auth/editInfo")({
  component: () => <DashboardEditInfo />,
});

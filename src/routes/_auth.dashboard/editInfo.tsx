import { createFileRoute } from "@tanstack/react-router";
import DashboardEditInfo from "../../pages/dashboard/editInfo";

export const Route = createFileRoute("/_auth/dashboard/editInfo")({
  component: () => <DashboardEditInfo />,
});

import { createLazyFileRoute } from "@tanstack/react-router";
import DashboardEditInfo from "../../pages/dashboard/editInfo";

export const Route = createLazyFileRoute("/_auth/dashboard/editInfo")({
  component: () => <DashboardEditInfo />,
});

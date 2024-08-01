import { createFileRoute, Outlet } from "@tanstack/react-router";
import DefaultLayout from "../Layouts/DefaultLayout";

export const Route = createFileRoute("/_main")({
  component: () => (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ),
});

import { createFileRoute, Outlet } from "@tanstack/react-router";
import { unAuthorizedBeforeLoad } from "../configs/beforeLoad";
import DefaultLayout from "../Layouts/DefaultLayout";

export const Route = createFileRoute("/_main")({
  ...unAuthorizedBeforeLoad,
  component: () => (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ),
});

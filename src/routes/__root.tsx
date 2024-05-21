import { createRootRoute, Outlet } from "@tanstack/react-router";
import AuthLayout from "../Layouts/AuthLayout";
import DefaultLayout from "../Layouts/DefaultLayout";

const authRoutes: string[] = ["/login", "/register"]

export const Route = createRootRoute({
  component: () => {
    const pathname = window.location.pathname

    const Layout = authRoutes.includes(pathname)
      ? AuthLayout
      : DefaultLayout;

    return (<>
      <Layout>
        <Outlet />
      </Layout>
    </>)
  },
});

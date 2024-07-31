import { createFileRoute } from "@tanstack/react-router";
import ForgetPassword from "../../pages/forget-password";

export const Route = createFileRoute("/_unAuth/forget-password/")({
  component: () => <ForgetPassword />,
});

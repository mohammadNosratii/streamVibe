import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_unAuth/forget-password/verify")({
  component: () => <div>Hello /forget-password/verify!</div>,
});

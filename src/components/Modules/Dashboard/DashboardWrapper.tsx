import { ReactNode } from "@tanstack/react-router";
import DashboardSidebar from "../../Templates/Dashboard/DashboardSidebar";

export default function DashboardWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container flex pt-24 pb-10 gap-10">
      <DashboardSidebar />
      {children}
    </div>
  );
}

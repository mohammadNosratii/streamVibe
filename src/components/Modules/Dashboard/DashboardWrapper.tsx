import { ReactNode } from "@tanstack/react-router";
import DashboardSidebar from "../../Templates/Dashboard/DashboardSidebar";

export default function DashboardWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container flex gap-10 pt-24 pb-10">
      <div className="flex-1">
        <DashboardSidebar />
      </div>
      <div className="flex-[5]">{children}</div>
    </div>
  );
}

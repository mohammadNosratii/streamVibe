import { ReactNode } from "@tanstack/react-router";
import DashboardSidebar from "../../Templates/Dashboard/DashboardSidebar";

export default function DashboardWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container flex pt-28 pb-10 gap-8">
      <DashboardSidebar />
      <div className="flex-grow bg-white dark:bg-black-6 border-2 dark:border-black-15 rounded-xl p-6 h-max">
        {children}
      </div>
    </div>
  );
}

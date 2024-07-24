import { ReactNode } from "@tanstack/react-router";
import DashboardSidebar from "../../Templates/Dashboard/DashboardSidebar";

export default function DashboardWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container flex flex-col sm:flex-row pt-28 pb-10 gap-8">
      <div className="md:flex-1 w-full">
        <DashboardSidebar />
      </div>
      <div className="md:flex-[5] xl:flex-[3] bg-white dark:bg-black-6 border-2 dark:border-black-15 rounded-xl p-6 h-max">
        {children}
      </div>
    </div>
  );
}

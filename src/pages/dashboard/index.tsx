import { ReactNode } from "react";
import DashboardSidebar from "../../components/Templates/Dashboard/DashboardSidebar";

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div className="container flex pt-24 pb-10">
      <DashboardSidebar />
      {children}
    </div>
  );
}

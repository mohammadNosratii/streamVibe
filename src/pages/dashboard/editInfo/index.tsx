import DashboardWrapper from "../../../components/Modules/Dashboard/DashboardWrapper";
import EditInfoForm from "../../../components/Templates/Dashboard/EditInfo/EditInfoForm";

export default function DashboardEditInfo() {
  return (
    <div>
      <DashboardWrapper>
        <div className="space-y-4">
          <h1 className="text-2xl font-manropeMedium">Edit Your Profile</h1>
          <EditInfoForm />
        </div>
      </DashboardWrapper>
    </div>
  );
}

import DashboardWrapper from "../../../components/Modules/Dashboard/DashboardWrapper";
import AvatarInfo from "../../../components/Templates/Dashboard/EditInfo/AvatarInfo";
import ChangePassword from "../../../components/Templates/Dashboard/EditInfo/ChangePassword";
import PersonalInfo from "../../../components/Templates/Dashboard/EditInfo/PersonalInfo";

export default function DashboardEditInfo() {
  return (
    <DashboardWrapper>
      <div className="space-y-4">
        <h1 className="text-2xl font-manropeMedium">Edit Your Profile</h1>
        <div className="space-y-10">
          <AvatarInfo />
          <PersonalInfo />
        </div>
      </div>
      <div className="mt-16 space-y-4">
        <h1 className="text-2xl font-manropeMedium">Change Password</h1>
        <ChangePassword />
      </div>
    </DashboardWrapper>
  );
}

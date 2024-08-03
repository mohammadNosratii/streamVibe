import { Skeleton } from "@nextui-org/react";

export default function UserInfoDashboardSidebarSkeleton() {
  return (
    <div className="max-w-[300px] w-full flex flex-col items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-16 h-16" />
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <Skeleton className="h-5 w-36 rounded-lg" />
        <Skeleton className="h-3.5 w-20 rounded-lg" />
      </div>
    </div>
  );
}

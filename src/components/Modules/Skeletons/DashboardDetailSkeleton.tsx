import { Card, Skeleton } from "@nextui-org/react";

export default function DashboardDetailSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {Array.from({ length: 5 }, (_, index) => (
        <Card
          key={index}
          className="p-5 flex flex-row items-center justify-between"
          radius="lg"
        >
          <Skeleton className="w-[40%] h-6 rounded-md" />
          <Skeleton className="w-[30%] h-5 rounded-md" />
        </Card>
      ))}
    </div>
  );
}

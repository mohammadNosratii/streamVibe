import { Button, Card } from "@nextui-org/react";
import { useGetUserInfoApi } from "../../../hooks/api/useUserApi";
import { formattedDate } from "../../../utils/dateConverters";
import DashboardDetailSkeleton from "../../Modules/Skeletons/DashboardDetailSkeleton";

export default function DashboardDetail() {
  const { data, isLoading } = useGetUserInfoApi();

  return (
    <div className="dark:bg-black-6 border-2 space-y-5 dark:border-black-12 rounded-xl py-8 px-5">
      <Card className="bg-red-45 dark:bg-red-45/80 p-4 flex flex-row items-center justify-between text-sm">
        <p className="text-white">You haven't subscription</p>
        <Button className="w-max">Buy Subscription</Button>
      </Card>
      {isLoading ? (
        <DashboardDetailSkeleton />
      ) : (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
            <h3>Joined date :</h3>
            <span>{formattedDate(data?.date_joined_timestamp)}</span>
          </Card>
          <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
            <h3>Shown name : </h3>
            <span>{data?.username}</span>
          </Card>
          <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
            <h3>Paln : </h3>
            <span>Gold</span>
          </Card>
          <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
            <h3>Paln Time : </h3>
            <span>28 Day</span>
          </Card>
          <Card className="bg-black-12 border border-black-15 p-4 overflow-x-scroll flex gap-2 justify-between">
            <h3>Your Email Address: </h3>
            <span className="text-xs md:text-base xl:text-sm">
              {data?.email}
            </span>
          </Card>
        </div>
      )}
    </div>
  );
}

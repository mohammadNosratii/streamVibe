import { Button, Card } from "@nextui-org/react";

export default function DashboardDetail() {
  return (
    <div className="dark:bg-black-6 border-2 space-y-5 dark:border-black-12 rounded-xl py-8 px-5">
      <Card className="bg-red-45/70 p-4 flex flex-row items-center justify-between">
        <p className="text-sm">You haven't subscription</p>
        <Button className="w-max text-[10px]">Buy Subscription</Button>
      </Card>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
          <h3>Joined date :</h3>
          <span>21 Jul 2024</span>
        </Card>
        <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
          <h3>Shown name : </h3>
          <span>Fangela22</span>
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
            Mohammadnosrati2002@gmail.com
          </span>
        </Card>
      </div>
    </div>
  );
}

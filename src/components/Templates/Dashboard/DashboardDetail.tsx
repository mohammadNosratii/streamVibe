import { Button, Card } from "@nextui-org/react";

export default function DashboardDetail() {
  return (
    <div className="dark:bg-black-6 border-2 space-y-5 dark:border-black-12 rounded-xl py-8 px-5">
      <Card className="bg-red-45/70 p-4 flex flex-row items-center justify-between">
        <p>You haven't subscription</p>
        <Button className="w-max">Buy Subscription</Button>
      </Card>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid grid-cols-2 gap-5">
          <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
            <h3>Joined date:</h3>
            <span>21 Jul 2024</span>
          </Card>
          <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
            <h3>Shown name : </h3>
            <span>Fangela22</span>
          </Card>
        </div>
        <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
          <h3>Your Email Address: </h3>
          <span>Mohammadnosrati2002@gmail.com</span>
        </Card>
        <Card className="bg-black-12 border border-black-15 p-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-1">
            <h3>Paln : </h3>
            <span>Gold</span>
          </div>
          <div className="flex items-center gap-1">
            <h3>Remains From Your Plan :</h3>
            <span>29 Day</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

import { Button } from "@nextui-org/react";

export default function FreeTrial() {
  return (
    <div className="container mb-32">
      <div className="freeTrail rounded-lg py-12 px-8 lg:py-20 lg:px-[60px] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-20 2xl:gap-[100px]">
        <div className="text-center space-y-2.5 md:text-start md:space-y-1">
          <h1 className="text-white text-2xl lg:text-3xl 2xl:text-5xl">
            Start your free trial today!
          </h1>
          <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <Button className="bg-red-45 text-white text-sm 2xl:text-lg py-3.5 px-5 lg:px-4 2xl:py-[18px] 2xl:px-6 rounded-lg">
          Start a Free Trail
        </Button>
      </div>
    </div>
  );
}

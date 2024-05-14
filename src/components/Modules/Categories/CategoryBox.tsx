import { ArrowRight } from "../../../assets/icons/Arrows";
import { categoryProps } from "../../../interfaces/category.interface";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function CategoryBox({ img, title }: categoryProps) {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] shadow-none rounded-[30px] col-span-12 sm:col-span-7 border dark:border-none dark:bg-gradient-to-b dark:from-white/70 dark:to-black-6/0 to-90% bg-gradient-to-t from-black-6/60 to-black-6/10"
    >
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover pt-1 px-1 rounded-[30px]"
        src={img}
      />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex justify-between flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-2xl text-white/60">{title}</p>
          </div>
        </div>
        <Button className="dark:bg-gradient-to-tr dark:from-black-6 dark:to-black-6/0" radius="full" size="sm">
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
}

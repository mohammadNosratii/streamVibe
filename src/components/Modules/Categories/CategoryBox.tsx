import { ArrowRight } from "../../../assets/icons/Arrows";
import { categoryProps } from "../../../interfaces/category.interface";
import { Card, Image} from "@nextui-org/react";

export default function CategoryBox({ img, title }: categoryProps) {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] text-white shadow-none rounded-[30px] col-span-12 sm:col-span-7 border dark:border-none dark:bg-gradient-to-b dark:from-white/70 dark:to-black-6/0 to-90% bg-gradient-to-t from-black-6/60 to-black-6/10"
    >
      <div className="relative h-full">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover p-1 rounded-[30px]"
          src={img}
        />
        <div className="text-center absolute top-1 left-1 text-sm sm:text-base 2xl:text-xl overflow-hidden bg-black-6/20 backdrop-blur-lg py-3 px-8 rounded-br-[35px] rounded-tl-[25px]">
          {title}
        </div>

        <button className="flex justify-center items-center absolute bottom-1 right-1 py-3 px-8 bg-black-6/20 backdrop-blur-lg rounded-tl-[30px] rounded-br-[25px]">
          <ArrowRight />
        </button>
      </div>
    </Card>
  );
}

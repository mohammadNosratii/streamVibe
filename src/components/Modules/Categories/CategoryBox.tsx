import { ArrowRight } from "../../../assets/icons/Arrows";
import { categoryProps } from "../../../interfaces/category.interface";

export default function CategoryBox({ img, title }: categoryProps) {
  return (
    <div className="bg-white dark:bg-black-10 bg-gradient-to-tr from-red-45/0 from-80% to-red-45/20 tp p-5 lg:p-6 2xl:p-7 rounded-xl space-y-3">
      <img className="w-full object-cover" src={img} alt="" />
      <div className="flex items-center justify-between">
        <span className="dark:text-white text-sm lg:text-base 2xl:text-lg">
          {title}
        </span>
        <ArrowRight />
      </div>
    </div>
  );
}

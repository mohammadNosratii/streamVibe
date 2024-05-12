import { ArrowRight } from "../../../assets/icons/Arrows";
import { categoryProps } from "../../../interfaces/category.interface";

export default function CategoryBox({ img, title }: categoryProps) {
  return (
    <div className="bg-black-10 p-7 border border-black-15 rounded-xl">
      <img className="w-full object-cover" src={img} alt="" />
      <div className="flex items-center justify-between">
        <span className="text-lg">{title}</span>
        <ArrowRight />
      </div>
    </div>
  );
}

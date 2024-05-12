import CategoriesSlider from "../Sliders/CategoriesSlider";
import { ArrowLeft, ArrowRight } from "../../../assets/icons/Arrows";

export default function Categories() {
  return (
    <div className="container mt-32 space-y-20">
      <div className="flex items-center justify-between md:gap-14 xl:gap-20 2xl:gap-24 ">
        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Explore our wide variety of categories
          </h2>
          <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3 2xl:gap-5 dark:bg-black-6 border border-black-12 rounded-lg 2xl:rounded-xl p-3 2xl:p-4">
          <div className="dark:bg-black-10 p-2.5 2xl:p-3.5 border border-black-12 rounded-lg cursor-pointer swiper-custom-button-prev">
            <ArrowLeft />
          </div>
          <div className="flex items-center gap-1 custom-pagination"></div>
          <div className="dark:bg-black-10 p-2.5 2xl:p-3.5 border border-black-12 rounded-lg cursor-pointer swiper-custom-button-next">
            <ArrowRight />
          </div>
        </div>
      </div>
      <CategoriesSlider />
    </div>
  );
}

import { SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "../../../assets/icons/Arrows";
import CategoriesSlider from "../Sliders/CategoriesSlider";
import dune2 from "../../../assets/images/dune-part2.webp";

export default function MoviesCastsSlider() {
  const casts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-lg text-gray-600 dark:text-gray-60">Casts</h3>
        <div className="flex items-center gap-2.5 child:border-2 child:dark:border-black-15 child:cursor-pointer child:dark:bg-black-8 child:p-3.5 child:rounded-full">
          <div className="swiper-custom-button-prev">
            <ArrowLeft />
          </div>
          <div className="swiper-custom-button-next">
            <ArrowRight />
          </div>
        </div>
      </div>
      <CategoriesSlider slidesPerViewXs={2} slidesPerViewLg={5}>
        {casts.map((cast, index) => (
          <SwiperSlide key={index}>
            <img
              className="rounded-3xl h-28 sm:h-36 2xl:h-44"
              src={dune2}
              alt={cast}
            />
          </SwiperSlide>
        ))}
      </CategoriesSlider>
    </div>
  );
}

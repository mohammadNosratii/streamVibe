import { SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "../../../assets/icons/Arrows";
import CategoriesSlider from "../Sliders/CategoriesSlider";
import { allMoviesData } from "../../../interfaces/allMoviesData.interface";
import MovieCastBox from "./MovieCastBox";

export default function MoviesCastsSlider({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  return (
    <div className="bg-white dark:bg-black-10 border-2 dark:border-black-15 p-6 md:p-12 space-y-4 rounded-2xl">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-sm md:text-lg text-gray-600 dark:text-gray-60">
          Casts
        </h3>
        <div className="flex items-center gap-2.5 child:border-1 child:dark:border-black-15 child:cursor-pointer child:bg-gray-95/80 child:dark:bg-black-8 child:p-2 child:md:p-3.5 child:rounded-full">
          <div className="swiper-custom-button-prev">
            <ArrowLeft />
          </div>
          <div className="swiper-custom-button-next">
            <ArrowRight />
          </div>
        </div>
      </div>
      <CategoriesSlider
        slidesPerViewXs={2}
        slidesPerViewSm={3}
        slidesPerViewLg={4}
      >
        {movieData.casts.map((cast, index) => (
          <SwiperSlide key={index}>
            <MovieCastBox {...cast} />
          </SwiperSlide>
        ))}
      </CategoriesSlider>
    </div>
  );
}

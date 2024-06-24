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
      <CategoriesSlider slidesPerViewXs={2} slidesPerViewLg={4}>
        {movieData.casts.map((cast, index) => (
          <SwiperSlide key={index}>
            <MovieCastBox {...cast} />
          </SwiperSlide>
        ))}
      </CategoriesSlider>
    </div>
  );
}

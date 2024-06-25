import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./CategoriesSlider.css";

import { Pagination, Navigation } from "swiper/modules";
import { categorySliderProps } from "../../../interfaces/categorySlider.interface";

export default function CategoriesSlider({
  children,
  slidesPerViewXs,
  slidesPerViewSm,
  slidesPerViewLg,
}: categorySliderProps) {
  return (
    <>
      <Swiper
        slidesPerView={slidesPerViewXs}
        spaceBetween={30}
        navigation={{
          prevEl: ".swiper-custom-button-prev",
          nextEl: ".swiper-custom-button-next",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletActiveClass: "categorySlider-active-bullet",
          bulletClass: "categorySlider-bullet",
        }}
        breakpoints={{
          640: {
            slidesPerView: slidesPerViewSm,
          },
          1024: {
            slidesPerView: slidesPerViewLg,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}

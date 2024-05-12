import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./CategoriesSlider.css";

import { Pagination, Navigation } from "swiper/modules";
import CategoryBox from "../Categories/CategoryBox";
import categoriesInfo from "../../../mock/categoriesInfo";

export default function CategoriesSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
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
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {categoriesInfo.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryBox {...category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

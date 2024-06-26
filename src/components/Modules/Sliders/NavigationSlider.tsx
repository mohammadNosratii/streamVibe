import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./NavigationSlider.css";
import { movieNavigationSlider } from "../../../interfaces/navigationSlider.interface";
import Header from "../../Templates/Home/Header/Header";
import HeaderSkeleton from "../HederSkeleton/HeaderSkeleton";

export default function NavigationSlider({
  data,
  loading,
}: {
  data: movieNavigationSlider[];
  loading: boolean;
}) {
  return (
    <Swiper
      cssMode={true}
      loop={true}
      autoplay={{ delay: 5000 }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      {loading ? (
        <HeaderSkeleton />
      ) : (
        data?.map((movie, index) => (
          <SwiperSlide key={index}>
            <Header {...movie} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}

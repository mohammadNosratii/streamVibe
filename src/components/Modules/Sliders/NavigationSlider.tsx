import { ReactNode } from "react";
import { Swiper } from "swiper/react";
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
import "./styles.css";

interface NavigationSliderProps {
  children: ReactNode;
}

export default function NavigationSlider({ children }: NavigationSliderProps) {
  return (
    <>
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
        {children}
      </Swiper>
    </>
  );
}

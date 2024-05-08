import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import Header from "../../components/Templates/Home/Header/Header";
import { SwiperSlide } from "swiper/react";

export default function Index() {
  return (
    <>
      <NavigationSlider>
        <SwiperSlide>
          <Header />
        </SwiperSlide>
        <SwiperSlide>
          <Header />
        </SwiperSlide>
        <SwiperSlide>
          <Header />
        </SwiperSlide>
      </NavigationSlider>
    </>
  );
}

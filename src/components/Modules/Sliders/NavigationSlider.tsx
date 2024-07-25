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
import Header from "../../Templates/Home/Header/Header";
import HeaderSkeleton from "../Skeletons/HeaderSkeleton";
import { useGetSliderMoviesApi } from "../../../hooks/api/useHomeApi";
import { useGetSliderNewMoviesApi } from "../../../hooks/api/useMovieApi";
import { useLocation } from "@tanstack/react-router";
import { movieNavigationSlider } from "../../../interfaces/navigationSlider.interface";
import showsSlider from "../../../mock/shows";

export default function NavigationSlider() {
  const { pathname } = useLocation();

  const { data: getSliderMovies, isLoading: getSliderMoviesLoading } =
    useGetSliderMoviesApi();

  const { data: getSliderNewMovies, isLoading: getSliderNewMoviesLoading } =
    useGetSliderNewMoviesApi();

  const getsliderShows = showsSlider();

  const handleData = () => {
    if (pathname.includes("/movies")) {
      return {
        data: getSliderNewMovies,
        isLoading: getSliderNewMoviesLoading,
      };
    } else if (pathname.includes("/shows")) {
      return {
        data: getsliderShows,
        isLoading: false,
      };
    } else {
      return {
        data: getSliderMovies,
        isLoading: getSliderMoviesLoading,
      };
    }
  };

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
      {handleData().isLoading ? (
        <HeaderSkeleton />
      ) : (
        handleData().data?.map(
          (movie: movieNavigationSlider, index: number) => (
            <SwiperSlide key={index}>
              <Header {...movie} />
            </SwiperSlide>
          )
        )
      )}
    </Swiper>
  );
}

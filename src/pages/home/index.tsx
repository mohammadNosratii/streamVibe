import Categories from "../../components/Modules/Categories/Categories";
import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import Devices from "../../components/Templates/Home/Devices/Devices";
import FrequentlyQuestions from "../../components/Templates/Home/Questions/FrequentlyQuestions";
import Subscription from "../../components/Modules/Subscription/Subscription";
import FreeTrial from "../../components/Modules/FreeTrial/FreeTrial";
import { useGetSliderMoviesApi } from "../../hooks/api/useHomeApi";

export default function Home() {
  const { data: getSliderMovies, isLoading } = useGetSliderMoviesApi();

  return (
    <>
      <NavigationSlider loading={isLoading} data={getSliderMovies} />
      <Categories />
      <Devices />
      <FrequentlyQuestions />
      <Subscription />
      <FreeTrial />
    </>
  );
}

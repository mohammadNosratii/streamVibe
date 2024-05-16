import Categories from "../../components/Modules/Categories/Categories";
import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import Devices from "../../components/Templates/Home/Devices/Devices";
import getMoviesInfo from "../../mock/getMoviesInfo";
import devicesBoxInfo from "../../mock/devicesBoxInfo"
import FrequentlyQuestions from "../../components/Templates/Home/Questions/FrequentlyQuestions";

export default function Home() {
  return (
    <>
      <NavigationSlider data={getMoviesInfo()} />
      <Categories />
      <Devices devices={devicesBoxInfo()} />
      <FrequentlyQuestions />
    </>
  );
}

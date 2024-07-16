import Categories from "../../components/Modules/Categories/Categories";
import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import Devices from "../../components/Templates/Home/Devices/Devices";
import FrequentlyQuestions from "../../components/Templates/Home/Questions/FrequentlyQuestions";
import Subscription from "../../components/Modules/Subscription/Subscription";
import FreeTrial from "../../components/Modules/FreeTrial/FreeTrial";

export default function Home() {
  return (
    <>
      <NavigationSlider />
      <Categories />
      <Devices />
      <FrequentlyQuestions />
      <Subscription />
      <FreeTrial />
    </>
  );
}

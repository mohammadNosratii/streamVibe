import Categories from "../../components/Modules/Categories/Categories";
import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import Devices from "../../components/Templates/Home/Devices/Devices";
import getMoviesInfo from "../../mock/getMoviesInfo";
import devicesBoxInfo from "../../mock/devicesBoxInfo"
import FrequentlyQuestions from "../../components/Templates/Home/Questions/FrequentlyQuestions";
import Subscription from "../../components/Modules/Subscription/Subscription";
import subscriptionPlansData from "../../mock/subscriptionPlansData";

export default function Home() {
  return (
    <>
      <NavigationSlider data={getMoviesInfo()} />
      <Categories />
      <Devices devices={devicesBoxInfo()} />
      <FrequentlyQuestions />
      <Subscription plans={subscriptionPlansData()} />
    </>
  );
}

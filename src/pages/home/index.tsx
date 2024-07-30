import Categories from "../../components/Modules/Categories/Categories";
import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import Devices from "../../components/Templates/Home/Devices/Devices";
import FrequentlyQuestions from "../../components/Templates/Home/Questions/FrequentlyQuestions";
import SubscriptionWrapper from "../../components/Modules/Subscription/Subscription";

export default function Home() {
  return (
    <>
      <NavigationSlider />
      <div className="container">
        <Categories />
        <Devices />
        <FrequentlyQuestions />
        <SubscriptionWrapper />
      </div>
    </>
  );
}

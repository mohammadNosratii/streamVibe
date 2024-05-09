import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import moviesInfo from "../../constants/HeaderMoviesInfo";

export default function Home() {
  return (
    <>
      <NavigationSlider data={moviesInfo} />
    </>
  );
}

import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import moviesInfo from "../../constants/HeaderMovieInfo";

export default function Home() {
  return (
    <>
      <NavigationSlider data={moviesInfo} />
    </>
  );
}

import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import getMoviesInfo from "../../mock/getMoviesInfo";

export default function Home() {
  return (
    <>
      <NavigationSlider data={getMoviesInfo()} />
    </>
  );
}

import FreeTrial from "../../components/Modules/FreeTrial/FreeTrial";
import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import MoviesBoxWrapper from "../../components/Templates/Movies/MoviesBoxWrapper";
import newMoviesInfo from "../../mock/newMoviesInfo";

export default function Movies() {
  return (
    <>
      <NavigationSlider data={newMoviesInfo()} />
      <MoviesBoxWrapper />
      <FreeTrial />
    </>
  );
}
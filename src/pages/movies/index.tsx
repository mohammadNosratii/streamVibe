import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import MoviesBoxWrapper from "../../components/Templates/Movies/MoviesBoxWrapper";
import MoviesCardInfo from "../../mock/MoviesCardInfo";
import newMoviesInfo from "../../mock/newMoviesInfo";

export default function Movies() {
  return (
    <>
      <NavigationSlider data={newMoviesInfo()} />
      <MoviesBoxWrapper moviesCardInfo={MoviesCardInfo()} />
    </>
  );
}

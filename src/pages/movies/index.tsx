import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import newMoviesInfo from "../../mock/newMoviesInfo";

export default function Movies() {
  return (
    <>
      <NavigationSlider data={newMoviesInfo()} />
    </>
  );
}

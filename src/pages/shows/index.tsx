import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import MoviesBoxWrapper from "../../components/Templates/Movies/MoviesBoxWrapper";

export default function Shows() {
  return (
    <>
      <NavigationSlider />
      <div className="container">
        <MoviesBoxWrapper />
      </div>
    </>
  );
}

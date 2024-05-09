import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import Header from "../../components/Templates/Home/Header/Header";
import MovieInfo from "../../constants/HeaderMoviesInfo";

export default function Index() {
  return (
    <>
      <NavigationSlider>
        {MovieInfo.map((movie) => (
          <Header key={movie.id} {...movie} />
        ))}
      </NavigationSlider>
    </>
  );
}

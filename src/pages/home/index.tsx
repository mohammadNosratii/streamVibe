import NavigationSlider from "../../components/Modules/Sliders/NavigationSlider";
import Header from "../../components/Templates/Home/Header/Header";
import moviesInfo from "../../constants/HeaderMovieInfo";

export default function Home() {
  return (
    <>
      <NavigationSlider>
        {moviesInfo.map((movie) => (
          <Header key={movie.id} {...movie} />
        ))}
      </NavigationSlider>
    </>
  );
}

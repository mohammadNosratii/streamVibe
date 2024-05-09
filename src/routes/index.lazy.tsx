import { createLazyFileRoute } from "@tanstack/react-router";
import Header from "../components/Templates/Home/Header/Header";
import NavigationSlider from "../components/Modules/Sliders/NavigationSlider";
import movieInfo from "../constants/HeaderMovieInfo";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <>
      <NavigationSlider>
        {movieInfo.map((movie) => (
          <Header key={movie.id} {...movie} />
        ))}
      </NavigationSlider>
    </>
  ),
});

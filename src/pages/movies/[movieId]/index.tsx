import { useParams } from "@tanstack/react-router";
import MovieBanner from "../../../components/Modules/Movie&ShowPageInfo/MovieBanner";
import MoviesCastsSlider from "../../../components/Modules/Movie&ShowPageInfo/MovieCastsSlider";
import MovieComment from "../../../components/Modules/Movie&ShowPageInfo/MovieComment";
import MovieDescription from "../../../components/Modules/Movie&ShowPageInfo/MovieDescription";
import MovieDetail from "../../../components/Modules/Movie&ShowPageInfo/MovieDetail";
import allMoviesInfo from "../../../mock/allMoviesInfo";
import DownloadLink from "../../../components/Modules/Movie&ShowPageInfo/DownloadLink";

export default function MovieDetailsPage() {
  const params = useParams({ from: "/_main/movies/$movieId" });

  const getMovieData = allMoviesInfo().find(
    (movie) => movie.id === Number(params.movieId)
  );

  if (!getMovieData) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <MovieBanner movieData={getMovieData} />
      <div className="container flex flex-col lg:flex-row items-start gap-5 dark:text-white my-20">
        <div className="space-y-5 w-full lg:w-[63%]">
          <MovieDescription movieData={getMovieData} />
          <div className="lg:hidden">
            <MovieDetail movieData={getMovieData} />
          </div>
          <DownloadLink movieData={getMovieData} />
          <MoviesCastsSlider movieData={getMovieData} />
          <MovieComment movieData={getMovieData} />
        </div>
        <div className="hidden lg:block">
          <MovieDetail movieData={getMovieData} />
        </div>
      </div>
    </div>
  );
}

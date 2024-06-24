import MovieCastsSlider from "./MovieCastsSlider";
import MovieComment from "./MovieComment";
import MovieDetail from "./MovieDetail";
import { useParams } from "@tanstack/react-router";
import { allMoviesData } from "../../../interfaces/allMoviesData.interface";
import MovieBanner from "./MovieBanner";
import MovieDescription from "./MovieDescription";

export default function MoviesPageInfo({
  allMoviesData,
}: {
  allMoviesData: allMoviesData[];
}) {
  const params = useParams({ from: "/movies/$movieId" });

  const getMovieData = allMoviesData.find(
    (movie) => movie.id === Number(params.movieId)
  );

  if (!getMovieData) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <MovieBanner movieData={getMovieData} />
      <div className="container flex items-start gap-5 dark:text-white my-20">
        <div className="space-y-5 child:dark:bg-black-10 child:border-2 child:dark:border-black-15 child:p-12 child:space-y-4 child:rounded-2xl w-[63%]">
          <MovieDescription movieData={getMovieData} />
          <MovieCastsSlider movieData={getMovieData}  />
          <MovieComment />
        </div>
        <div className="dark:bg-black-10 border-2 dark:border-black-15 p-12 rounded-2xl">
          <MovieDetail movieData={getMovieData} />
        </div>
      </div>
    </div>
  );
}

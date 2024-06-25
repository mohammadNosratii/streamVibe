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
      <div className="container flex flex-col lg:flex-row items-start gap-5 dark:text-white my-20">
        <div className="space-y-5 child:dark:bg-black-10 child:border-2 child:dark:border-black-15 child:p-6 child:md:p-12 child:space-y-4 child:rounded-2xl w-full lg:w-[63%]">
          <MovieDescription movieData={getMovieData} />
          <div className="lg:hidden">
            <MovieDetail movieData={getMovieData} />
          </div>
          <MovieCastsSlider movieData={getMovieData} />
          <MovieComment movieData={getMovieData} />
        </div>
        <div className="hidden lg:block dark:bg-black-10 border-2 w-full dark:border-black-15 p-6 md:p-12 rounded-2xl">
          <MovieDetail movieData={getMovieData} />
        </div>
      </div>
    </div>
  );
}

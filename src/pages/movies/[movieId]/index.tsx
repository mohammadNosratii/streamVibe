import MoviesPageInfo from "../../../components/Modules/Movie&ShowPageInfo/MoviePageInfo";
import allMoviesInfo from "../../../mock/allMoviesInfo";

export default function MovieDetailsPage() {
  return <MoviesPageInfo allMoviesData={allMoviesInfo()} />;
}

import MoviesPageInfo from "../../../components/Modules/Movie&ShowPageInfo/MoviePageInfo";
import allMoviesInfo from "../../../mock/allMoviesInfo";

export default function MovieId() {
  return <MoviesPageInfo allMoviesData={allMoviesInfo()} />;
}

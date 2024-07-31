import { useParams } from "@tanstack/react-router";
import { allShowsInfo } from "../../../mock/allShowsInfo";
import MovieBanner from "../../../components/Modules/Movie&ShowPageInfo/MovieBanner";
import MovieDescription from "../../../components/Modules/Movie&ShowPageInfo/MovieDescription";
import MovieDetail from "../../../components/Modules/Movie&ShowPageInfo/MovieDetail";
import DownloadLink from "../../../components/Modules/Movie&ShowPageInfo/DownloadLink";
import MoviesCastsSlider from "../../../components/Modules/Movie&ShowPageInfo/MovieCastsSlider";
import MovieComment from "../../../components/Modules/Movie&ShowPageInfo/MovieComment";

export default function ShowDetailsPage() {
  const params = useParams({ from: "/_main/shows/$showId" });

  const getShowData = allShowsInfo().find(
    (show) => show.id === Number(params.showId)
  );

  // TODO should design if not found the movie or show
  if (!getShowData) {
    return <div>Show not found</div>;
  }
  return (
    <div>
      <MovieBanner movieData={getShowData} />
      <div className="container flex flex-col lg:flex-row items-start gap-5 dark:text-white my-20">
        <div className="space-y-5 w-full lg:w-[63%]">
          <MovieDescription movieData={getShowData} />
          <div className="lg:hidden">
            <MovieDetail movieData={getShowData} />
          </div>
          <DownloadLink movieData={getShowData} />
          <MoviesCastsSlider movieData={getShowData} />
          <MovieComment movieData={getShowData} />
        </div>
        <div className="hidden lg:block">
          <MovieDetail movieData={getShowData} />
        </div>
      </div>
    </div>
  );
}

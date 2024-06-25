import { Chip } from "@nextui-org/react";
import Calender from "../../../assets/icons/Calender";
import Language from "../../../assets/icons/Language";
import StarOutline from "../../../assets/icons/StarOutline";
import RatingsBox from "../../Modules/Movie&ShowPageInfo/RatingsBox";
import Square2x2 from "../../../assets/icons/Square2x2";
import CreatorMovieInfo from "./CreatorMovieInfo";
import formattedDate from "../../../utils/calculateTimeStamp";
import { allMoviesData } from "../../../interfaces/allMoviesData.interface";

export default function MovieDetail({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  const { date, availableLanguage, score, geners, creatorInfo } = movieData;  

  return (
    <div className="space-y-8 child:space-y-4">
      <div>
        <div className="movieDetail">
          <Calender />
          <h3 className="text-sm md:text-lg">Release Date</h3>
        </div>
        <span className="text-xl">{formattedDate(date)}</span>
      </div>
      <div>
        <div className="movieDetail">
          <Language />
          <h3 className="text-sm md:text-lg">Available Languages</h3>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap child:dark:bg-black-8 child:text-sm child:py-1.5 child:px-3 child:md:py-5 child:md:px-4 child:rounded-lg">
          {availableLanguage.map((movie, index) => (
            <Chip key={index}>{movie}</Chip>
          ))}
        </div>
      </div>
      <div>
        <div className="movieDetail">
          <StarOutline />
          <h3 className="text-sm md:text-lg">Ratings</h3>
        </div>
        {score.map((movieScore, index) => (
          <div key={index}>
            <RatingsBox {...movieScore} />
          </div>
        ))}
      </div>
      <div>
        <div className="movieDetail">
          <Square2x2 />
          <h3 className="text-sm md:text-lg">Gernes</h3>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap child:text-sm child:md:text-lg child:dark:bg-black-8 child:py-1.5 child:px-3 child:md:py-5 child:md:px-4 child:rounded-lg">
          {geners.map((gen, index) => (
            <Chip key={index}>{gen}</Chip>
          ))}
        </div>
      </div>
      <div>
        {creatorInfo.map((creator, index) => (
          <CreatorMovieInfo key={index} {...creator} />
        ))}
      </div>
    </div>
  );
}

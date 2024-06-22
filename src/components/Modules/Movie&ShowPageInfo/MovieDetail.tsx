import { Chip } from "@nextui-org/react";
import Calender from "../../../assets/icons/Calender";
import Language from "../../../assets/icons/Language";
import StarOutline from "../../../assets/icons/StarOutline";
import RatingsBox from "../../Modules/Movie&ShowPageInfo/RatingsBox";
import Square2x2 from "../../../assets/icons/Square2x2";
import CreatorMovieInfo from "./CreatorMovieInfo";

export default function MovieDetail() {
  return (
    <div className="space-y-8 child:space-y-4">
      <div>
        <div className="movieDetail">
          <Calender />
          <h3 className="text-lg">Release Date</h3>
        </div>
        <span className="text-xl">11 september 2024</span>
      </div>
      <div>
        <div className="movieDetail">
          <Language />
          <h3>Available Languages</h3>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap child:dark:bg-black-8 child:py-5 child:px-4 child:rounded-lg">
          <Chip>English</Chip>
          <Chip>France</Chip>
          <Chip>Spanish</Chip>
          <Chip>Italy</Chip>
          <Chip>Italy</Chip>
          <Chip>Italy</Chip>
        </div>
      </div>
      <div>
        <div className="movieDetail">
          <StarOutline />
          <h3>Ratings</h3>
        </div>
        <RatingsBox />
        <RatingsBox />
      </div>
      <div>
        <div className="movieDetail">
          <Square2x2 />
          <h3>Gernes</h3>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap child:dark:bg-black-8 child:py-5 child:px-4 child:rounded-lg">
          <Chip>ACtion</Chip>
          <Chip>Adventure</Chip>
        </div>
      </div>
      <div>
        <CreatorMovieInfo />
        <CreatorMovieInfo />
      </div>
    </div>
  );
}

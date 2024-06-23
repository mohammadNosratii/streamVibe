import Imdb from "../../../assets/icons/Imdb";
import StarRating from "../StarRating/StarRating";

export default function RtingsBox() {
  return (
    <div className="p-4 bg-white dark:bg-black-8 rounded-lg space-y-1">
      <div className="flex items-center gap-2">
        <Imdb />
        Imdb
      </div>
      <div className="flex items-center gap-1">
        <StarRating rate={4.3} />
        <span>4.3</span>
      </div>
    </div>
  );
}

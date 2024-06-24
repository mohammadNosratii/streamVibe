import { movieRatingProps } from "../../../interfaces/movieRatingProps.interface";
import StarRating from "../StarRating/StarRating";

export default function RtingsBox({
  title,
  movieRate,
  icon: Icon,
}: movieRatingProps) {
  return (
    <div className="p-4 bg-white dark:bg-black-8 rounded-lg space-y-1">
      <div className="flex items-center gap-2">
        <Icon />
        {title}
      </div>
      <div className="flex items-center gap-1">
        <StarRating rate={movieRate} />
        <span>{movieRate}</span>
      </div>
    </div>
  );
}

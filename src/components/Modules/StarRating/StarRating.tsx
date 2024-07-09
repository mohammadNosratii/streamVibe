import StarRatings from "react-star-ratings";
import { starRatingProps } from "../../../interfaces/starRating.interface";

export default function StarRating({ rate, onChange, isEditable }: starRatingProps) {
  const ratingProps = {
    starDimension: "18px",
    rating: rate,
    starRatedColor: "#E50000",
    starEmptyColor: "#999999",
    numberOfStars: 5,
    name: "rating",
    starSpacing: "1px",
    ...(isEditable && { changeRating: onChange }),
  };

  return <StarRatings {...ratingProps} />
}
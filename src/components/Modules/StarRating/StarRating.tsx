import StarRatings from "react-star-ratings";

export default function StarRating({ rate }: { rate: number | undefined }) {
  return (
    <StarRatings
      starDimension="16px"
      rating={rate}
      starRatedColor="#E50000"
      starEmptyColor="#999999"
      //   changeRating={}
      numberOfStars={5}
      name="rating"
      starSpacing="1px"
    />
  );
}

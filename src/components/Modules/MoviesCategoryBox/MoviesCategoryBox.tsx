import { Link } from "@tanstack/react-router";
import { ArrowRight } from "../../../assets/icons/Arrows";
import MovieCart from "./MovieCart";
import { moviesCardProps } from "../../../interfaces/moviesCardInfo.interface";

export default function MoviesCategoryBox({
  moviesCardInfo,
}: {
  moviesCardInfo: moviesCardProps[];
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl">Top 100 Movies</h1>
        <Link className="flex items-center gap-2" to="/">
          <span>See All</span>
          <ArrowRight />
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 mt-6">
        {moviesCardInfo.map((card, index) => (
          <MovieCart key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

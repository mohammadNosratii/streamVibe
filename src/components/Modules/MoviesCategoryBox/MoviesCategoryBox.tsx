import { ArrowRight } from "../../../assets/icons/Arrows";
import MovieCard from "./MovieCard";
import { moviesCardProps } from "../../../interfaces/moviesCardInfo.interface";
import { Link } from "@tanstack/react-router";

export default function MoviesCategoryBox({
  category,
  movies,
}: moviesCardProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl 2xs:text-2xl 3xs:text-3xl sm:text-4xl">
          {category}
        </h1>
        <Link
          className="flex items-center gap-2 hover:text-red-45 transition-all duration-300"
          to="/"
        >
          <span className="text-sm 3xs:text-base sm:text-lg">See All</span>
          <ArrowRight />
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 mt-6">
        {movies.map((card) => (
          <MovieCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

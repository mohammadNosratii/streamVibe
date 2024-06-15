import { Link } from "@tanstack/react-router";
import { ArrowRight } from "../../../assets/icons/Arrows";
import MovieCart from "./MovieCart";

export default function MoviesCategoryBox() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl">Top 100 Movies</h1>
        <Link className="flex items-center gap-2" to="/">
          <span>See All</span>
          <ArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-6">
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
      </div>
    </div>
  );
}

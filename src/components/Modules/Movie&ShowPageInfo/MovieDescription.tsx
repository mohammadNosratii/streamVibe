import { allMoviesData } from "../../../interfaces/allMoviesData.interface";

export default function MovieDescription({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  return (
    <div>
      <h3 className="text-gray-600 dark:text-gray-60 text-sm md:text-lg">Description</h3>
      <p className="text-sm md:text-lg">{movieData.des}</p>
    </div>
  );
}

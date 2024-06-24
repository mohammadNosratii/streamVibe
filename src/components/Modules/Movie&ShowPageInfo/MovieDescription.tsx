import { allMoviesData } from "../../../interfaces/allMoviesData.interface";

export default function MovieDescription({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  return (
    <div>
      <h3 className="text-gray-600 dark:text-gray-60 text-lg">Description</h3>
      <p className="text-lg">{movieData.des}</p>
    </div>
  );
}

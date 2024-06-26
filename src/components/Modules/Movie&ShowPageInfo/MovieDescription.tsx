import { allMoviesData } from "../../../interfaces/allMoviesData.interface";

export default function MovieDescription({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  return (
    <div className="dark:bg-black-10 border-2 dark:border-black-15 p-6 md:p-12 space-y-4 rounded-2xl">
      <h3 className="text-gray-600 dark:text-gray-60 text-sm md:text-lg">Description</h3>
      <p className="text-sm md:text-lg">{movieData.des}</p>
    </div>
  );
}

import { Button } from "@nextui-org/react";
import PlusIcon from "../../../assets/icons/Plus";
import MovieCommentBox from "./MovieCommentBox";
import { allMoviesData } from "../../../interfaces/allMoviesData.interface";

export default function MovieComment({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  return (
    <div className="space-y-10 dark:bg-black-10 border-2 dark:border-black-15 p-6 md:p-12 rounded-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-600 dark:text-gray-60 text-sm md:text-lg">
          Reviews
        </h3>
        <Button
          className="rounded-lg dark:bg-black-8 p-3 md:py-3.5 md:px-4 text-sm md:text-lg"
          startContent={<PlusIcon className="fill-black dark:fill-white" />}
        >
          Add Your Review
        </Button>
      </div>
      {movieData.comments.map((comment, index) => (
        <MovieCommentBox key={index} {...comment} />
      ))}
    </div>
  );
}

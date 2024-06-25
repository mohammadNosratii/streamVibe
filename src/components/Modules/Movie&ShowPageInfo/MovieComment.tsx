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
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-600 dark:text-gray-60 text-lg">Reviews</h3>
        <Button
          className="rounded-lg dark:bg-black-8 py-3.5 px-4"
          startContent={<PlusIcon />}
        >
          Add Your Review
        </Button>
      </div>
      {movieData.comments.map((comment) => (
        <MovieCommentBox {...comment} />
      ))}
    </div>
  );
}

import { Button } from "@nextui-org/react";
import PlusIcon from "../../../assets/icons/Plus";
import MovieCommentBox from "./MovieCommentBox";
import { allMoviesData } from "../../../interfaces/allMoviesData.interface";
import AddReviewForm from "./AddReviewForm";
import { useMemo, useState } from "react";

export default function MovieComment({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  const [addReviewTrigger, setAddReviewTrigger] = useState(false);

  const triggerAddReviewHandler = () => {
    setAddReviewTrigger((prev) => !prev);
  };
  return (
    <div className="space-y-10 bg-white dark:bg-black-10 border-2 dark:border-black-15 p-6 md:p-12 rounded-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-600 dark:text-gray-60 text-sm md:text-lg">
          Reviews
        </h3>
        <Button
          className="rounded-lg dark:bg-black-8 p-3 md:py-3.5 md:px-4"
          startContent={<PlusIcon className="fill-black dark:fill-white" />}
          onClick={triggerAddReviewHandler}
        >
          Add Your Review
        </Button>
      </div>
      <div
        className={`transition-all duration-250 ${
          addReviewTrigger ? "h-[260px]" : "h-[0px]"
        } overflow-hidden !mt-0`}
      >
        <AddReviewForm
          discardReview={triggerAddReviewHandler}
          isReply={false}
        />
      </div>
      {useMemo(
        () =>
          movieData.comments.map((comment, index) => (
            <MovieCommentBox key={index} {...comment} />
          )),
        [movieData.comments]
      )}
    </div>
  );
}

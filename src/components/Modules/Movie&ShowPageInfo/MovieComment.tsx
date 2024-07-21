import { Button } from "@nextui-org/react";
import PlusIcon from "../../../assets/icons/Plus";
import MovieCommentBox from "./MovieCommentBox";
import { allMoviesData } from "../../../interfaces/allMoviesData.interface";
import AddReviewForm from "./AddReviewForm";
import { useMemo, useState } from "react";
import { isAuthenticated } from "../../../utils/isAuthenticated";
import { useLocation, useNavigate } from "@tanstack/react-router";

export default function MovieComment({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [addReviewTrigger, setAddReviewTrigger] = useState(false);
  const isUserAuthorized = isAuthenticated()

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
        className={`transition-all duration-250 bg-mainLight dark:bg-black-6 rounded-lg ${addReviewTrigger ? "h-[260px] p-4" : "h-[0px]"
          } overflow-hidden !mt-4`}
      >
        {isUserAuthorized ?
          <AddReviewForm
            discardReview={triggerAddReviewHandler}
            isReply={false}
          /> :
          <div className="h-full flex justify-center items-center flex-col gap-4 font-manropeMedium">
            <p>To Reply Comments Should Login First</p>
            <Button className="text-white bg-red-45 capitalize" onClick={() => navigate({ to: "/login", search: { redirect: pathname } })}>Login to your account</Button>
          </div>
        }
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

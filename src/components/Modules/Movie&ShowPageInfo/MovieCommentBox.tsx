import { Avatar } from "@nextui-org/react";
import StarRating from "../StarRating/StarRating";
import { movieComment } from "../../../interfaces/movieComment.interface";
import ReplyIcon from "../../../assets/icons/Reply";
import MainTooltip from "../Tooltip/MainTooltip";
import { useState } from "react";
import AddReviewForm from "./AddReviewForm";

export default function MovieCommentBox({
  name,
  profileImg,
  commentRate,
  commentText,
}: movieComment) {
  const [addReplyTrigger, setAddReplyTrigger] = useState(false)

  const triggerAddReplyHandler = () => {
    setAddReplyTrigger((prev) => !prev)
  }
  return (
    <div className="bg-mainLight dark:bg-black-6 border-2 dark:border-black-15 p-6 md:p-10 rounded-xl space-y-5">
      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8 md:w-10 md:h-10" isBordered radius="sm" src={profileImg} />
          <h2 className="text-base md:text-xl font-manropeSemiBold">{name}</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-white/45 dark:bg-black-8 py-1 px-2 md:py-1.5 md:px-2.5 border-2 dark:border-black-15 rounded-[50px]">
            <StarRating rate={commentRate} isEditable={false} />
            <span className="text-sm mt-0.5">{commentRate}</span>
          </div>
          <MainTooltip content="Reply">
            <span className="cursor-pointer" onClick={triggerAddReplyHandler}>
              <ReplyIcon />
            </span>
          </MainTooltip>
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-60">{commentText}</p>
      <div className={`transition-all duration-250 ${addReplyTrigger ? "h-[260px] p-5" : "h-[0px]"} overflow-hidden bg-white dark:bg-black-10 rounded-xl`}>
        <AddReviewForm discardReview={triggerAddReplyHandler} isReply={true} />
      </div>
    </div>
  );
}

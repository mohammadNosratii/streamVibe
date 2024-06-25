import { Avatar } from "@nextui-org/react";
import StarRating from "../StarRating/StarRating";
import { movieComment } from "../../../interfaces/movieComment.interface";

export default function MovieCommentBox({
  name,
  profileImg,
  commentRate,
  commentText,
}: movieComment) {
  return (
    <div className="dark:bg-black-6 border-2 dark:border-black-15 p-10 rounded-xl space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar isBordered radius="sm" src={profileImg} />
          <h2 className="text-xl font-manropeSemiBold">{name}</h2>
        </div>
        <div className="flex items-center gap-1 dark:bg-black-8 py-1.5 px-2.5 border-2 dark:border-black-15 rounded-[50px]">
          <StarRating rate={commentRate} />
          <span className="text-gray-60">{commentRate}</span>
        </div>
      </div>
      <p className="text-base text-gray-60">{commentText}</p>
    </div>
  );
}

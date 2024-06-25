import { Avatar } from "@nextui-org/react";
import StarRating from "../StarRating/StarRating";

export default function MovieCommentBox() {
  return (
    <div className="dark:bg-black-6 border-2 dark:border-black-15 p-10 rounded-xl space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            isBordered
            radius="sm"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
          <h2 className="text-xl font-manropeSemiBold">Mohammad</h2>
        </div>
        <div className="flex items-center gap-1 dark:bg-black-8 py-1.5 px-2.5 border-2 dark:border-black-15 rounded-[50px]">
          <StarRating rate={4.5} />
          <span className="text-gray-60">4.5</span>
        </div>
      </div>
      <p className="text-base text-gray-60">
        This movie was recommended to me by a very dear friend who went for the
        movie by herself. I went to the cinemas to watch but had a houseful
        board so couldn’t watch it.
      </p>
    </div>
  );
}

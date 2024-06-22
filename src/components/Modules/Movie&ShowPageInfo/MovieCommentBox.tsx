import StarRating from "../StarRating/StarRating";

export default function MovieCommentBox() {
  return (
    <div className="dark:bg-black-6 border-2 dark:border-black-15 p-10 rounded-xl space-y-5">
      <div className="flex items-center justify-between">
        <h2>Mohammad</h2>
        <div className="flex items-center gap-1 dark:bg-black-8 py-1.5 px-2.5 border-2 dark:border-black-15 rounded-[50px]">
          <StarRating rate={4.5} />
          <span className="text-gray-60">4.5</span>
        </div>
      </div>
      <p>
        This movie was recommended to me by a very dear friend who went for the
        movie by herself. I went to the cinemas to watch but had a houseful
        board so couldn’t watch it.
      </p>
    </div>
  );
}

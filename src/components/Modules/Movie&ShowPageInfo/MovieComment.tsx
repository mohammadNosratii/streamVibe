import PlusIcon from "../../../assets/icons/Plus";
import MovieCommentBox from "./MovieCommentBox";

export default function MovieComment() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-60 text-lg">Reviews</h3>
        <div className="flex items-center gap-1 bg-black-8 py-3.5 px-4 rounded-lg border border-black-15 cursor-pointer">
          <PlusIcon />
          <span className="text-lg">Add Your Review</span>
        </div>
      </div>
      <MovieCommentBox />
      <MovieCommentBox />
      <MovieCommentBox />
    </div>
  );
}

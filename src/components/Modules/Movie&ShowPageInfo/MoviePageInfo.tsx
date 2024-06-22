import { Button } from "@nextui-org/react";
import PlayCircle from "../../../assets/icons/PlayCircle";
import dune2 from "../../../assets/images/dune-part2.webp";
import PlusIcon from "../../../assets/icons/Plus";
import LikeIcon from "../../../assets/icons/Like";
import MovieCastsSlider from "./MovieCastsSlider";
import MovieComment from "./MovieComment";
import MovieDetail from "./MovieDetail";

export default function MoviesPageInfo() {
  return (
    <div>
      <div className="relative flex justify-center rounded-xl overflow-hidden">
        <img src={dune2} alt="" />
        <div className="absolute bottom-10 flex flex-col items-center gap-8">
          <div>
            <h2 className="text-4xl text-center mb-6 font-manropeBold">
              Dune: Part Two
            </h2>
            <p>
              Paul Atreides unites with Chani and the Fremen while seeking
              revenge against the conspirators who destroyed his family.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-red-45" endContent={<PlayCircle />}>
              Play Trailer
            </Button>
            <div className="child:bg-black-6 child:p-2 child:rounded-lg flex gap-2 child:cursor-pointer">
              <span>
                <PlusIcon />
              </span>
              <span>
                <LikeIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex gap-5 text-white my-20">
        <div className="space-y-10 child:bg-black-10 child:border child:border-black-15 child:p-12 child:space-y-4 child:rounded-2xl w-[65%]">
          <div>
            <h3 className="text-gray-60 text-lg">Description</h3>
            <p className="text-lg">
              Paul Atreides unites with Chani and the Fremen while seeking
              revenge against the conspirators who destroyed his family.
            </p>
          </div>
          <div>
            <MovieCastsSlider />
          </div>
          <div>
            <MovieComment />
          </div>
        </div>
        <div className="bg-black-10 p-12 rounded-2xl">
          <MovieDetail />
        </div>
      </div>
    </div>
  );
}

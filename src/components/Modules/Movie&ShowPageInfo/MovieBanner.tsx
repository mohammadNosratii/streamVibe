import { Button } from "@nextui-org/react";
import PlusIcon from "../../../assets/icons/Plus";
import LikeIcon from "../../../assets/icons/Like";
import PlayCircle from "../../../assets/icons/PlayCircle";
import { allMoviesData } from "../../../interfaces/allMoviesData.interface";
import MainTooltip from "../Tooltip/MainTooltip";

export default function MovieBanner({
  movieData,
}: {
  movieData: allMoviesData;
}) {
  const { img, title } = movieData;

  return (
    <div className="relative flex justify-center rounded-xl overflow-hidden text-white">
      <img className="h-[90vh] w-full object-cover" src={img} alt="movie img" />
      <div className="absolute bottom-10 flex flex-col items-center gap-8">
        <h2 className="text-4xl text-center font-manropeBold">{title}</h2>
        <div className="flex items-center gap-2">
          <Button className="bg-red-45 text-white" endContent={<PlayCircle />}>
            Play Trailer
          </Button>
          <div className="child:bg-black-6 child:p-2 child:rounded-lg flex gap-2 child:cursor-pointer">
            <MainTooltip content="Add to Favorites">
              <Button className="min-w-min">
                <PlusIcon className="fill-white" />
              </Button>
            </MainTooltip>
            <MainTooltip content="Like">
              <Button className="min-w-min">
                <LikeIcon />
              </Button>
            </MainTooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

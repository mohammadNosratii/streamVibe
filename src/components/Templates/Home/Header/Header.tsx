import PlayCircle from "../../../../assets/icons/PlayCircle";
import { Button } from "@nextui-org/react";
import { movieNavigationSlider } from "../../../../interfaces/navigationSlider.interface";
import PlusIcon from "../../../../assets/icons/Plus";
import Speaker from "../../../../assets/icons/Speaker";
import LikeIcon from "../../../../assets/icons/LikeIcon";

export default function Header({
  img,
  title,
  description,
  genres,
}: movieNavigationSlider) {
  return (
    <div className="relative">
      <img
        className="-z-10 w-full h-[600px] rounded-none object-cover"
        alt="NextUI hero Image"
        src={img}
      />
      <div
        className={`container absolute w-[80%] md:w-[60%] space-y-5 ${
          window.location.pathname === "/movies"
            ? "headerMovies"
            : "HomeheaderMovies"
        }`}
      >
        <div className="items-center gap-2 rounded-2xl inline-flex">
          <div className="w-16 h-0.5 bg-mainLight"></div>
          <span className="text-mainLight">{genres}</span>
          <div className="w-16 h-0.5 bg-mainLight"></div>
        </div>
        <h2 className="text-white text-4xl font-manropeSemiBold">{title}</h2>
        <p className="text-white line-clamp-2">{description}</p>
        <div className="flex items-center gap-2">
          <Button
            className="text-white bg-red-45 rounded-2xl px-5 md:px-8 text-base md:text-xl"
            endContent={<PlayCircle />}
          >
            Play
          </Button>
          <div
            className={` items-center gap-2 child:bg-black-6 child:p-2 child:rounded-lg ${
              window.location.pathname === "/movies" ? "flex" : "hidden"
            }`}
          >
            <span>
              <PlusIcon />
            </span>
            <span>
              <LikeIcon />
            </span>
            <span>
              <Speaker />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

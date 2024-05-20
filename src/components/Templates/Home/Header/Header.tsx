import PlayCircle from "../../../../assets/icons/PlayCircle";
import { movieNavigationSlider } from "../../../../interfaces/navigationSlider.interface";
import { Button } from "@nextui-org/react";

export default function Header({
  title,
  img,
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
      <div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-32 md:translate-x-0 w-[80%] md:w-[60%] space-y-5">
        <div className="items-center gap-2  p-1 rounded-2xl inline-flex">
          <div className="w-16 h-0.5 bg-mainLight"></div>
          <span className="text-mainLight">{genres}</span>
        </div>
        <h2 className="text-white text-4xl font-manropeSemiBold">{title}</h2>
        <p className="text-white line-clamp-2">{description}</p>
        <Button
          className="text-white bg-red-45 rounded-2xl px-5 md:px-8 text-base md:text-xl"
          endContent={<PlayCircle />}
        >
          Play
        </Button>
      </div>
    </div>
  );
}

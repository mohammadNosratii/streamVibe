import playIcon from "../../../../assets/icons/play-circle.svg";
import { movieNavigationSlider } from "../../../../interfaces/navigationSlider.interface";

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
        <div className="flex items-center gap-2">
          <div className="w-16 h-0.5 bg-gray-75"></div>
          <span className="text-gray-60">{genres}</span>
        </div>
        <h2 className="text-4xl font-manropeSemiBold">{title}</h2>
        <p className="line-clamp-2">{description}</p>
        <div className="flex items-center justify-center gap-2.5 w-24 h-10 lg:w-36 lg:h-12 bg-red-45 rounded-3xl">
          <button className="text-md lg:text-lg">Play</button>
          <img className="w-4 h-4 lg:w-5 lg:h-5" src={playIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

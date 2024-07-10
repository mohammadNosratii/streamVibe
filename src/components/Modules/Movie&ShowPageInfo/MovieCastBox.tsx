import { Image } from "@nextui-org/react";
import { castsMovie } from "../../../interfaces/castsMovie.interface";

export default function MovieCastBox({
  realName,
  movieName,
  castImg,
}: castsMovie) {
  return (
    <div className="bg-gray-95/80 dark:bg-black-12 rounded-xl">
      <Image
        className="rounded-2xl w-full h-44 sm:h-40 2xl:h-44 object-cover"
        src={castImg}
        alt=""
        classNames={{
          wrapper: ["!max-w-none"]
        }}
      />
      <div className="flex flex-col items-center gap-2 p-3">
        <h3 className="text-xs xl:text-base text-black-12 dark:text-white font-manropeSemiBold">{realName}</h3>
        <span className="text-[10px] md:text-xs text-gray-60 line-clamp-1">{movieName}</span>
      </div>
    </div>
  );
}

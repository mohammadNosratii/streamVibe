import { castsMovie } from "../../../interfaces/castsMovie.interface";

export default function MovieCastBox({
  realName,
  movieName,
  castImg,
}: castsMovie) {
  return (
    <div className="bg-black-12 rounded-xl">
      <img
        className="rounded-2xl w-full h-28 sm:h-32 2xl:h-44 object-cover"
        src={castImg}
        alt=""
      />
      <div className="flex flex-col items-center gap-2 p-3">
        <h3 className="text-xs md:text-base text-white font-manropeSemiBold">{realName}</h3>
        <span className="text-[10px] md:text-xs text-gray-60 line-clamp-1">{movieName}</span>
      </div>
    </div>
  );
}

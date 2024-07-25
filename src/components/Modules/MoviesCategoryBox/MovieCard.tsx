import { Chip, Divider } from "@nextui-org/react";
import Star from "../../../assets/icons/Star";
import { moviesCardProps } from "../../../interfaces/moviesCardInfo.interface";
import Play from "../../../assets/icons/Play";
import { Link, useLocation } from "@tanstack/react-router";
import formatter from "../../../utils/compactReviewNumbers";
import formattedDate from "../../../utils/calculateTimeStamp";

export default function MovieCard({
  id,
  title,
  img,
  date,
  rate,
  review,
  des,
  geners,
  season,
  color,
  mainColor,
}: moviesCardProps["movies"][0]) {
  const { pathname } = useLocation();

  return (
    <Link
      to={pathname === "/movies" ? `/movies/${id}` : `/shows/${id}`}
      className={`text-white rounded-xl overflow-hidden bg-gradient-to-br ${color} to-red-45/10 ${mainColor} relative border-4 border-white/70 dark:border-black-6/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-normal delay-150`}
    >
      <div className="movieCardImg overflow-hidden w-full sm:w-[60%] absolute top-0 right-0 sm:h-full group cursor-pointer">
        <img className="h-full object-cover" src={img} alt="" />
        <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute top-1/2 -translate-y-3/4 right-1/2 translate-x-3/4 bg-black-6/20 backdrop-blur-lg p-2 2xs:p-3 sm:p-4 rounded-3xl">
          <Play />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-7 items-start justify-between h-full pt-40 2xs:pt-48 3xs:pt-[240px] sm:pt-4">
        <div className="hidden sm:inline-block">
          <h2 className="text-xl font-manropeSemiBold mb-2">MOVIE DETAILS</h2>
          <Divider className="w-20" />
        </div>
        <div>
          <h2 className="text-[17px] lg:text-base xl:text-lg font-manropeSemiBold 2xs:max-w-[90%] sm:max-w-[80%] xl:max-w-[85%] bg-blue">
            {title}
          </h2>
          <div>
            {pathname === "/shows" && (
              <span className="text-sm">Season: {season}</span>
            )}
          </div>
          <span className="text-xs dark:text-gray-75 inline-block sm:max-w-44">
            Release date: {formattedDate(date)}
          </span>
        </div>
        <div className="flex items-center">
          <Star />
          <p className="ms-2 text-sm font-bold text-white">{rate} / 10</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span className="text-[13px] font-medium underline hover:no-underline text-white">
            {formatter.format(review)} reviews
          </span>
        </div>
        <p className="text-xs dark:text-gray-75 sm:max-w-[50%] line-clamp-2 sm:line-clamp-4">
          {des}
        </p>
        <div className="flex flex-wrap items-center gap-3 child:border child:bg-transparent child:border-gray-75 child:text-white">
          {geners.map((gen, index) => (
            <Chip key={index}>{gen}</Chip>
          ))}
        </div>
      </div>
    </Link>
  );
}

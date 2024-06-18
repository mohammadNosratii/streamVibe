import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Image,
  ScrollShadow,
} from "@nextui-org/react";
import Star from "../../../assets/icons/Star";
import { moviesCardProps } from "../../../interfaces/moviesCardInfo.interface";

export default function MovieCart({
  title,
  img,
  date,
  rate,
  review,
  dec,
  geners,
  color,
  mainColor,
}: moviesCardProps) {
  return (
    <div
      className={`text-white rounded-xl overflow-hidden bg-gradient-to-br ${color} to-red-45/10 ${mainColor} relative border-4 border-white/70 dark:border-black-6/60 cursor-pointer`}
    >
      <div className="movieCardImg overflow-hidden w-[60%] absolute top-0 right-0 h-full">
        <img className="h-full object-cover" src={img} alt="" />
      </div>
      <div className="p-4 flex flex-col gap-7 items-start justify-between h-full">
        <div>
          <h2 className="text-xl font-manropeSemiBold mb-2">MOVIE DETAILS</h2>
          <Divider className="w-20" />
        </div>
        <div>
          <h2 className="text-lg lg:text-base xl:text-lg font-manropeSemiBold max-w-[70%] lg:max-w-[60%] xl:max-w-[65%] bg-blue">
            {title}
          </h2>
          <span className="text-xs dark:text-gray-75 inline-block max-w-44">
            Release date: {date}
          </span>
        </div>
        <div className="flex items-center">
          <Star />
          <p className="ms-2 text-sm font-bold text-white">{rate} / 10</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a
            href="#"
            className="text-sm font-medium underline hover:no-underline text-white"
          >
            {review} reviews
          </a>
        </div>
        <p className="text-xs dark:text-gray-75 max-w-[50%] line-clamp-4">
          {dec}
        </p>
        <div className="flex items-center gap-3 child:border child:bg-transparent child:border-gray-75 child:text-white">
          {geners.map((gen, index) => (
            <Chip key={index}>{gen.gen}</Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <Card isFooterBlurred radius="lg" className="border-none">
      <CardHeader className="group cursor-pointer">
        <Image
          isBlurred
          className="object-cover w-full h-52 relative group-hover:opacity-80 group-hover:scale-110"
          src={MadMax}
        />
        <ScrollShadow className="h-[200px] absolute z-50 p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p>
            Over the course of several years, two convicts form a friendship,
            seeking consolation and, eventually, redemption through basic
            compassion.
          </p>
        </ScrollShadow>
      </CardHeader>

      <CardBody className="overflow-visible py-2 space-y-2">
        <h2 className="text-lg font-manropeSemiBold">
          The Shawshank Redemption
        </h2>
        <span className="text-gray-65 text-sm">2024 . George Miller</span>
        <span className="text-sm">2h 10m</span>
        <div className="flex items-center">
          <Star />
          <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
            9.3/10
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a
            href="#"
            className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            2.9M reviews
          </a>
        </div>

        <div className="space-x-3 child:text-xs">
          <Chip>#Drama</Chip>
        </div>
      </CardBody>
    </Card> */
}

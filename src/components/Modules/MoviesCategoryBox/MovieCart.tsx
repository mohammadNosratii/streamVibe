import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
  ScrollShadow,
} from "@nextui-org/react";
import MadMax from "../../../assets/images/cropped-3840-2160-338840.jpg";
import Star from "../../../assets/icons/Star";

export default function MovieCart() {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
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
    </Card>
  );
}

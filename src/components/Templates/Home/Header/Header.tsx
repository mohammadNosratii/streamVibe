import jokerImg from "../../../../assets/images/Rectangle 176.png";
import { Image } from "@nextui-org/react";
import playIcon from "../../../../assets/icons/play-circle.svg";

export default function Header() {
  return (
    <div className="relative">
      <Image className="-z-10 rounded-none" alt="NextUI hero Image" src={jokerImg} />
      <div className="absolute top-48 left-36 w-[510px] space-y-5">
        <div className="flex items-center gap-2">
          <div className="w-16 h-0.5 bg-gray-60"></div>
          <span className="text-gray-60">Crime, Drama, Thriller</span>
        </div>
        <h2 className="text-4xl font-manropeSemiBold">Joker 2019</h2>
        <p className="line-clamp-2">
          During the 1980s, a failed stand-up comedian is driven insane and
          turns to a life of crime and chaos in Gotham City while becoming an
          infamous psychopathic crime figure.
        </p>
        <div className="flex items-center justify-center gap-2.5 w-36 h-12 bg-red-45 rounded-3xl">
          <button className="text-lg">Play</button>
          <img className="w-5 h-5" src={playIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

import jokerImg from "../../../../assets/images/joker.png";
import playIcon from "../../../../assets/icons/play-circle.svg";

export default function Header() {
  return (
    <div className="relative">
      <img className="-z-10 w-full h-[600px] rounded-none object-cover" alt="NextUI hero Image" src={jokerImg} />
      <div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-32 md:translate-x-0 w-[80%] md:w-[60%] space-y-5">
        <div className="flex items-center gap-2">
          <div className="w-16 h-0.5 bg-gray-75"></div>
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

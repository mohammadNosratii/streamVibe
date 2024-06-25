import { Card, CardHeader, Image } from "@nextui-org/react";
import { creatorMovieInfo } from "../../../interfaces/creatorMovieInfo";

export default function CreatorMovieInfo({
  job,
  name,
  family,
  pic,
}: creatorMovieInfo) {
  return (
    <div className="space-y-4">
      <div className="movieDetail">
        <h3 className="text-sm md:text-lg">{job}</h3>
      </div>
      <Card className="shadow-none">
        <CardHeader className="flex gap-3">
          <Image className="w-12 h-12 md:w-16 md:h-16 object-cover" src={pic} />
          <div className="flex flex-col">
            <p className="text-base md:text-lg">{name}</p>
            <p className="text-sm md:text-base text-default-500">{family}</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

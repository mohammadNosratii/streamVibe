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
        <h3>{job}</h3>
      </div>
      <Card className="shadow-none">
        <CardHeader className="flex gap-3">
          <Image className="w-16 h-16 object-cover" src={pic} />
          <div className="flex flex-col">
            <p className="text-md">{name}</p>
            <p className="text-small text-default-500">{family}</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

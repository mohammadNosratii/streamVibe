import { Card, CardHeader, Image } from "@nextui-org/react";

export default function CreatorMovieInfo() {
  return (
    <div className="space-y-4">
      <div className="movieDetail">
        <h3>Director</h3>
      </div>
      <Card className="shadow-none">
        <CardHeader className="flex gap-3">
          <Image
            className="w-16"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

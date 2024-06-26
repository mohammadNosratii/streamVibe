import { Skeleton } from "@nextui-org/react";

export default function HeaderSkeleton() {
  return (
    <div className="relative">
      <div className="w-full h-[600px] bg-gray-70 dark:bg-zinc-700"></div>
      <div
        className={`container absolute w-[80%] md:w-[60%] space-y-3 ${
          window.location.pathname === "/movies" ? "moviesHeader" : "homeHeader"
        }`}
      >
        <Skeleton className="h-5 w-[20%] rounded-md dark:bg-gray-70" />

        <Skeleton className="w-[45%] h-8 dark:bg-gray-70 rounded-md" />
        <div className="!mt-5 space-y-2">
          {Array.from({ length: 2 }, (_, index) => (
            <Skeleton
              key={index}
              className="w-[75%] h-[18px] dark:bg-gray-70 rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

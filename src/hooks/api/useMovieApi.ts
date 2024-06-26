import { useQuery } from "@tanstack/react-query";
import { getSliderNewMoviesApi } from "../../services/api/movieApi";

export const useGetSliderNewMoviesApi = (isInMoviePage: boolean) => {
  return useQuery({
    queryKey: ["getSliderNewMovies"],
    queryFn: () => getSliderNewMoviesApi().then((data) => data.data),
    enabled: !!isInMoviePage,
  });
};

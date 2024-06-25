import { useQuery } from "@tanstack/react-query";
import { getSliderMoviesApi } from "../../services/api/homeApi";

export const useGetSliderMoviesApi = () => {
  return useQuery({
    queryKey: ["getSliderMovies"],
    queryFn: () => getSliderMoviesApi().then((data) => data.data),
  });
};

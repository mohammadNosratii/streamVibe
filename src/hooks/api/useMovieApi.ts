import { useQuery } from "@tanstack/react-query";
import {
  getSliderNewMoviesApi,
  getTopMoviesApi,
} from "../../services/api/movieApi";

export const useGetSliderNewMoviesApi = () => {
  return useQuery({
    queryKey: ["getSliderNewMovies"],
    queryFn: () => getSliderNewMoviesApi().then((data) => data.data),
  });
};

export const useGetTopMoviesApi = () => {
  return useQuery({
    queryKey: ["getTopMovies"],
    queryFn: () => getTopMoviesApi().then((data) => data.data),
  });
};

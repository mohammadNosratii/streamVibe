import { useQuery } from "@tanstack/react-query";
import {
  getCategoriesApi,
  getSliderMoviesApi,
} from "../../services/api/homeApi";

export const useGetSliderMoviesApi = () => {
  return useQuery({
    queryKey: ["getSliderMovies"],
    queryFn: () => getSliderMoviesApi().then((data) => data.data),
  });
};

export const useGetCategoriesApi = () => {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: () => getCategoriesApi().then((data) => data.data),
  });
};

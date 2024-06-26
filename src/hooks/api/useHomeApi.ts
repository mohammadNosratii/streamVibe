import { useQuery } from "@tanstack/react-query";
import {
  getCategoriesApi,
  getFrequentlyQuestionsApi,
  getSliderMoviesApi,
  getSubscriptionsApi,
} from "../../services/api/homeApi";

export const useGetSliderMoviesApi = (isInMoviePage: boolean) => {
  return useQuery({
    queryKey: ["getSliderMovies"],
    queryFn: () => getSliderMoviesApi().then((data) => data.data),
    enabled: !isInMoviePage,
  });
};

export const useGetCategoriesApi = () => {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: () => getCategoriesApi().then((data) => data.data),
  });
};

export const useGetFrequentlyQuestionsApi = () => {
  return useQuery({
    queryKey: ["getFrequentlyQuestions"],
    queryFn: () => getFrequentlyQuestionsApi().then((data) => data.data),
  });
};

export const useGetSubscriptionsApi = () => {
  return useQuery({
    queryKey: ["getSubscriptions"],
    queryFn: () => getSubscriptionsApi().then((data) => data.data),
  });
};

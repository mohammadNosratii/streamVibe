import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_API + "home/";

export const getSliderMoviesApi = () => {
  return httpService.get(baseUrl + "getSliderMovies");
};

export const getCategoriesApi = () => {
  return httpService.get(baseUrl + "getCategories");
};

export const getFrequentlyQuestionsApi = () => {
  return httpService.get(baseUrl + "getFrequentlyQuestions");
};

export const getSubscriptionsApi = () => {
  return httpService.get(baseUrl + "getSubscriptions");
};

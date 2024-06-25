import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_API + "home/";

export const getSliderMoviesApi = () => {
  return httpService.get(baseUrl + "getSliderMovies");
};

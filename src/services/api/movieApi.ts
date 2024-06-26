import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_API + "movies/";

export const getSliderNewMoviesApi = () => {
  return httpService.get(baseUrl + "getSliderMovies");
};

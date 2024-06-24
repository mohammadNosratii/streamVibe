import { creatorMovieInfo } from "./creatorMovieInfo";
import { movieRatingProps } from "./movieRatingProps.interface";

interface allMoviesData {
  id: number;
  title: string;
  img: string;
  date: number;
  rate: number;
  review: number;
  des: string;
  geners: string[];
  availableLanguage: string[];
  score: movieRatingProps[];
  creatorInfo: creatorMovieInfo[];
}

export type { allMoviesData };

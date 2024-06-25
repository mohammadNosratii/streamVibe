import { castsMovie } from "./castsMovie.interface";
import { creatorMovieInfo } from "./creatorMovieInfo";
import { movieComment } from "./movieComment.interface";
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
  casts: castsMovie[];
  comments: movieComment[];
}

export type { allMoviesData };

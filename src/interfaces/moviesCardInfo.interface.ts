interface moviesCardProps {
  category: string;
  movies: {
    title: string;
    img: string;
    date: string;
    rate: string;
    review: string;
    dec: string;
    color: string;
    mainColor: string;
    geners: { gen: string }[];
  }[];
}

export type { moviesCardProps };

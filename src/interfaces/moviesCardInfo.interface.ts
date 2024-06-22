interface moviesCardProps {
  category: string;
  movies: {
    title: string;
    img: string;
    date: string;
    rate: string;
    review: string;
    des: string;
    color: string;
    mainColor: string;
    geners: string[];
  }[];
}

export type { moviesCardProps };

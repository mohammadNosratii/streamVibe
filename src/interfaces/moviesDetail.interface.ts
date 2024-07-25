interface moviesDetail {
  id: number;
  title: string;
  img: string;
  date: number;
  rate: number;
  season?: number;
  review: number;
  des: string;
  color: string;
  mainColor: string;
  geners: string[];
}

export type { moviesDetail };

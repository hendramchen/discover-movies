export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountriy {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountriy[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const initialMovieDetail: IMovieDetail = {
  adult: false,
  backdrop_path: "",
  belongs_to_collection: {
    id: 0,
    name: "",
    poster_path: "",
    backdrop_path: "",
  },
  budget: 0,
  genres: [
    {
      id: 0,
      name: "",
    },
  ],
  homepage: "",
  id: 0,
  imdb_id: "",
  original_language: "",
  original_title: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [
    {
      id: 0,
      logo_path: "",
      name: "",
      origin_country: "",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "",
      name: "",
    },
  ],
  release_date: "",
  revenue: 0,
  runtime: 0,
  spoken_languages: [
    {
      english_name: "",
      iso_639_1: "",
      name: "",
    },
  ],
  status: "",
  tagline: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};

// export const initialMovie: IMovie = {
//   adult: false,
//   backdrop_path: ,
//   genre_ids: [],
//   id: 0,
//   original_language: ,
//   original_title: ,
//   overview: ,
//   popularity: 0,
//   poster_path: ,
//   release_date: ,
//   title: ,
//   video: false,
//   vote_average: 0,
//   vote_count: 0,
// };

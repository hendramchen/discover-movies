import React from "react";

import MovieItem from "../MovieList/MovieItem/MovieItem";
import { IMovie } from "../../types/type.movie";

interface IProps {
  movieList: IMovie[];
  favList?: IMovie[];
}
const MovieList = ({ movieList, favList = [] }: IProps) => {
  // let between = movieList.length >= 6 ? "justify-between" : "";
  let favorites: number[] = [];
  if (favList.length > 0) {
    favorites = favList.map((item) => item.id);
  }
  return (
    <div className={`flex flex-wrap ml-4 mr-4 bg-gray-200`}>
      {movieList.map((item) => {
        let isFavorite = favorites.includes(item.id);
        return <MovieItem key={item.id} movie={item} isFav={isFavorite} />;
      })}
    </div>
  );
};

export default MovieList;

import React from "react";

import MovieItem from "../MovieList/MovieItem/MovieItem";
import { IMovie } from "../../types/type.movie";

interface IProps {
  movieList: IMovie[];
}
const MovieList = ({ movieList }: IProps) => {
  // let between = movieList.length >= 6 ? "justify-between" : "";
  return (
    <div className={`flex flex-wrap ml-4 mr-4 bg-gray-200`}>
      {movieList.map((item, index) => (
        <MovieItem key={index} movie={item} />
      ))}
    </div>
  );
};

export default MovieList;

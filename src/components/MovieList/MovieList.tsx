import React from "react";
import Filter from "../Filter/Filter";
import MovieItem from "../MovieList/MovieItem/MovieItem";
import { IMovie } from "../../types/type.movie";

interface IProps {
  page: number;
  movieList: IMovie[];
}
const MovieList = ({ page, movieList }: IProps) => {
  return (
    <div>
      <Filter />
      <div className="flex flex-wrap">
        {movieList.map((item, index) => (
          <MovieItem key={index} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

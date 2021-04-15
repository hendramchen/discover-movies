import React from "react";
import { IMovieDetail } from "../../types/type.movie";

interface IProps {
  detail: IMovieDetail;
}
const MovieDetail = ({ detail }: IProps) => {
  return (
    <div>
      <div className="backdrop flex min-h-0">
        {detail.backdrop_path ? (
          <img
            className="image w-full ng-star-inserted"
            src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
          />
        ) : null}
      </div>

      <div>{detail.title}</div>
      <div>{detail.overview}</div>
    </div>
  );
};

export default MovieDetail;

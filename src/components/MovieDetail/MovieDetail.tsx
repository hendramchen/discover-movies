import React, { Component } from "react";
import { IMovieDetail } from "../../types/type.movie";

interface IProps {
  detail: IMovieDetail;
}
class MovieDetail extends Component<IProps> {
  render() {
    return (
      <div className="relative">
        <div className="">
          {this.props.detail.backdrop_path ? (
            <img
              className="image w-full"
              src={`https://image.tmdb.org/t/p/original/${this.props.detail.backdrop_path}`}
            />
          ) : null}
        </div>

        <div className="absolute top-0 bg-black bg-opacity-50">
          <div className="w-2/5 pl-14 pt-9">
            <h1 className="text-5xl text-white">{this.props.detail.title}</h1>
            <p className="text-green-50 pt-3 text-2xl">
              {this.props.detail.overview}
            </p>
          </div>
          <div className="pl-14 mt-6">
            <img
              className="image w-72 rounded-xl"
              src={`https://image.tmdb.org/t/p/original/${this.props.detail.poster_path}`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;

import React, { Component } from "react";
import { IMovie, IGenre } from "../../../types/type.movie";
import * as actions from "../../../store/actions";
import { getGenres } from "../../../utils/util.function";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface IProps {
  movie: IMovie;
  genres: IGenre[];
  onAddFavorit: (movie: IMovie) => void;
  onRemoveFavorit: (id: number) => void;
}
class MovieItem extends Component<IProps> {
  render() {
    let genreList: string[] = getGenres(
      this.props.movie.genre_ids,
      this.props.genres
    );

    return (
      <div className="flex flex-col relative border m-2 border-gray-200 bg-white rounded-xl w-72 hover:shadow-xl hover:border-blue-500">
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}
          alt=""
          className="w-72 object-cover rounded-tl-xl rounded-tr-xl cursor-pointer"
        />

        <div className="relative">
          <div className="h-24 m-4">
            <h1 className="p-1 text-xl font-semibold">
              {this.props.movie.title}
            </h1>
            <div className="flex flex-wrap">
              {genreList.length > 0 &&
                genreList.map((item) => (
                  <div className="text-white bg-red-400 text-xs pt-1 pb-1 pl-2 pr-2 m-1">
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <div className="p-5">
            {this.props.movie.overview.substr(0, 120) + "..."}
          </div>

          <div className="p-4 flex space-x-3">
            <Link
              className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
              to={`/movie/${this.props.movie.id}`}
            >
              Detail
            </Link>

            <button
              onClick={() => this.props.onAddFavorit(this.props.movie)}
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
              type="button"
              aria-label="like"
            >
              <svg width="20" height="20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    genres: state.gen.genres,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddFavorit: (movie: IMovie) => dispatch(actions.addFavorit(movie)),
    onRemoveFavorit: (id: number) => dispatch(actions.removeFavorit(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);

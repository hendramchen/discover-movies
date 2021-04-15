import React, { Component } from "react";
import { IMovie } from "../../../types/type.movie";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface IProps {
  movie: IMovie;
  onAddFavorit: (movie: IMovie) => void;
  onRemoveFavorit: (id: number) => void;
}
class MovieItem extends Component<IProps> {
  render() {
    return (
      <div className="border m-2 border-gray-200 bg-white rounded-xl w-72 hover:shadow-xl hover:border-blue-500">
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}
          alt=""
          className="w-72 object-cover rounded-tl-xl rounded-tr-xl cursor-pointer"
        />
        <h1 className="p-4 mb-2 text-xl font-semibold absolute w-64">
          {this.props.movie.title}
        </h1>
        <div className="p-4 mt-24">
          {this.props.movie.overview.substr(0, 120) + "..."}
        </div>

        <div className="p-4">
          <Link
            className="border m-1 bg-gray-500"
            to={`/movie/${this.props.movie.id}`}
          >
            Detail
          </Link>
          <button
            className="border m-1 bg-gray-500"
            onClick={() => this.props.onAddFavorit(this.props.movie)}
          >
            Love
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddFavorit: (movie: IMovie) => dispatch(actions.addFavorit(movie)),
    onRemoveFavorit: (id: number) => dispatch(actions.removeFavorit(id)),
  };
};

export default connect(null, mapDispatchToProps)(MovieItem);

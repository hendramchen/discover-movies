import React, { Component } from "react";
import { IMovieDetail, IMovie } from "../../types/type.movie";
import LoveButton from "../UI/Button/LoveButton";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { timeConvert, formatCurrency } from "../../utils/util.function";

interface IProps {
  detail: IMovieDetail;
  favorites: IMovie[];
  onAddFavorite: (movie: IMovie) => void;
  onRemoveFavorite: (id: number) => void;
}

class MovieDetail extends Component<IProps> {
  render() {
    const { detail, favorites } = this.props;
    const genre_ids = detail.genres.map((item) => item.id);
    const movie: IMovie = {
      adult: detail.adult,
      backdrop_path: detail.backdrop_path,
      genre_ids: genre_ids,
      id: detail.id,
      original_language: detail.original_language,
      original_title: detail.original_title,
      overview: detail.overview,
      popularity: detail.popularity,
      poster_path: detail.poster_path,
      release_date: detail.release_date,
      title: detail.title,
      video: detail.video,
      vote_average: detail.vote_average,
      vote_count: detail.vote_count,
    };

    let isFav = false;
    if (favorites.length > 0) {
      const favList = favorites.map((item) => item.id);
      isFav = favList.includes(detail.id);
    }

    return (
      <div className="relative">
        <div className="">
          {detail.backdrop_path ? (
            <img
              className="image w-full"
              src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
              alt="backdrop"
            />
          ) : null}
        </div>

        <div className="absolute top-0 bg-black bg-opacity-50 h-full w-full">
          <div className="w-2/5 pl-14 pt-9">
            <h1 className="text-5xl text-white">{detail.title}</h1>
            <p className="text-green-50 pt-3 text-2xl">{detail.overview}</p>
          </div>
          <div className="pl-14 mt-6 flex">
            <div className="relative">
              <img
                className="image w-72 rounded-xl"
                src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                alt="poster"
              />
              <LoveButton
                onAddFavorite={() => this.props.onAddFavorite(movie)}
                onRemoveFavorite={() => this.props.onRemoveFavorite(detail.id)}
                additionalStyle={"absolute bottom-2 mb-1 ml-2"}
                isFavorite={isFav}
              />
            </div>

            <div className="text-white ml-6 mt-8 space-y-3">
              <div>
                <span className="font-bold">Popularity: </span>
                {detail.popularity}
              </div>
              <div className="flex">
                <span className="font-bold">Genre: </span>
                {detail.genres.map((item) => (
                  <div
                    key={item.id}
                    className="text-white bg-red-400 text-xs pt-1 pb-1 pl-2 pr-2 m-1"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
              <div>
                <span className="font-bold">Release Date: </span>{" "}
                {detail.release_date}
              </div>
              <div>
                <span className="font-bold">Link: </span> {detail.homepage}
              </div>
              <div className="flex">
                <span className="font-bold">Production: </span>
                {detail.production_companies.map((item) => (
                  <div key={item.id}>{` ${item.name}, `}</div>
                ))}
              </div>
              <div>
                <span className="font-bold">Runtime: </span>{" "}
                {timeConvert(detail.runtime)}
              </div>
              <div>
                <span className="font-bold">Revenue: </span>{" "}
                {formatCurrency.format(detail.revenue)}
              </div>
              <div>
                <span className="font-bold">Vote Average: </span>{" "}
                {detail.vote_average}
              </div>
              <div>
                <span className="font-bold">Vote Count: </span>{" "}
                {detail.vote_count}
              </div>
              <div className="flex">
                <span className="font-bold">Spoken Languages: </span>
                {detail.spoken_languages.map((item) => (
                  <div key={item.iso_639_1}>{` ${item.name}, `}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    favorites: state.fav.favorites,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddFavorite: (movie: IMovie) => dispatch(actions.addFavorite(movie)),
    onRemoveFavorite: (id: number) => dispatch(actions.removeFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

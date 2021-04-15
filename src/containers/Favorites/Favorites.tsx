import React, { Component } from "react";
import { connect } from "react-redux";
import { IMovie, IGenre } from "../../types/type.movie";
import MovieList from "../../components/MovieList/MovieList";

interface IProps {
  favorites?: IMovie[];
  children: React.ReactNode;
}

class Favorites extends Component<IProps> {
  render() {
    const { favorites = [] } = this.props;
    let favList = null;
    if (favorites.length > 0) {
      favList = <MovieList movieList={favorites} />;
    }
    return (
      <div>
        <h1 className="text-3xl text-gray-900 pl-8 pt-5 pb-5">My Favorit</h1>
        {favList}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    favorites: state.fav.favorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);

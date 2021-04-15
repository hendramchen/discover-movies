import React, { Component } from "react";
import { connect } from "react-redux";
import { IMovie } from "../../types/type.movie";

interface IProps {
  movieProps?: IMovie[];
  children: React.ReactNode;
}

class Favorites extends Component<IProps> {
  render() {
    const { movieProps = [] } = this.props;
    let favList = null;
    if (movieProps.length > 0) {
      favList = movieProps.map((item) => {
        return <div>{item.title}</div>;
      });
    }
    return (
      <div>
        <div>Favorit page</div>
        {favList}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    movieProps: state.mov.movies,
  };
};

export default connect(mapStateToProps, null)(Favorites);

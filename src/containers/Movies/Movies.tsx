import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions";
import { IMovie } from "../../types/type.movie";
import MovieList from "../../components/MovieList/MovieList";

interface IProps {
  movieProps: IMovie[];
  onAddFavorit: (movie: IMovie) => void;
  onRemoveFavorit: (id: number) => void;
  sortType: string;
  sortBy: string;
  releaseStart: string;
  releaseEnd: string;
}

interface IState {
  payload: {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
  };
  sortType: string;
  sortBy: string;
  releaseStart: string;
  releaseEnd: string;
}
const API_KEY = "1b869b3ccf57d089047ded4b1de007b8";
const BASE_URL = "https://api.themoviedb.org/3/";

class Movies extends Component<IProps, IState> {
  state = {
    payload: {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    sortType: "desc",
    sortBy: "popularity",
    releaseStart: "",
    releaseEnd: "",
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    // &release_date.gte=2000-01-01&release_date.lte=2020-01-02
    const { sortType, sortBy, releaseStart, releaseEnd } = this.props;
    const sorting = `${sortBy}.${sortType}`;
    let release = "";
    if (releaseStart && releaseEnd) {
      release = `&release_date.gte=${releaseStart}&release_date.lte=${releaseEnd}`;
    }
    axios
      .get(
        `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sorting}&include_adult=false&include_video=false&page=1${release}`
      )
      .then((response) => {
        console.log("Movies");
        console.log(response.data);
        const payload = response.data;
        this.setState({ payload });
        // console.log(movieList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onAddFavorit = (movie: IMovie) => {
    this.props.onAddFavorit(movie);
  };

  onShowStore = () => {
    console.log("movieProps");
    console.log(this.props.movieProps);
    // this.setState({ sortBy: this.props.sortBy });
  };

  render() {
    const {
      movieProps,
      sortType,
      sortBy,
      releaseStart,
      releaseEnd,
    } = this.props;

    let movieList = null;

    if (this.state.payload.results.length > 0) {
      movieList = (
        <MovieList
          movieList={this.state.payload.results}
          page={this.state.payload.page}
        />
      );
    } else {
      movieList = <Spinner />;
    }

    return (
      <Auxiliary>
        <div>{movieList}</div>
        <button onClick={this.onShowStore}>show store</button>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    movieProps: state.mov.movies,
    sortType: state.fil.sortType,
    sortBy: state.fil.sortBy,
    releaseStart: state.fil.releaseStart,
    releaseEnd: state.fil.releaseEnd,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddFavorit: (movie: IMovie) => dispatch(actions.addFavorit(movie)),
    onRemoveFavorit: (id: number) => dispatch(actions.removeFavorit(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

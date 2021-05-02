import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import axios from "axios";
// import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions";
import { IMovie, IGenre } from "../../types/type.movie";
import MovieList from "../../components/MovieList/MovieList";
import Filter from "../../components/Filter/Filter";

interface IProps {
  genres: IGenre[];
  onSetGenres: (genres: IGenre[]) => void;
  favorites?: IMovie[];
}

interface IState {
  movies: IMovie[];
  page: number;
  sortBy: string;
  sortType: string;
  releaseStart: string;
  releaseEnd: string;
}

const API_KEY = "1b869b3ccf57d089047ded4b1de007b8";
const BASE_URL = "https://api.themoviedb.org/3/";

class Movies extends Component<IProps, IState> {
  state = {
    movies: [],
    page: 1,
    sortBy: "popularity",
    sortType: "desc",
    releaseStart: "",
    releaseEnd: "",
  };

  componentDidMount() {
    this.getMovies(1, "popularity", "desc", "", "");
    if (this.props.genres.length === 0) {
      this.getGenre();
    }
  }

  getMovies = (
    page: number,
    sortBy: string,
    sortType: string,
    releaseStart: string,
    releaseEnd: string
  ) => {
    const sorting = `${sortBy}.${sortType}`;
    let release = "";
    if (releaseStart && releaseEnd) {
      release = `&release_date.gte=${releaseStart}&release_date.lte=${releaseEnd}`;
    }
    axios
      .get(
        `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sorting}&include_adult=false&include_video=false&page=${page}${release}`
      )
      .then((response) => {
        const movies: IMovie[] = response.data.results;
        this.setState({ movies });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getGenre = () => {
    axios
      .get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const genres: IGenre[] = response.data.genres;
        this.props.onSetGenres(genres);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChangePage = (page: number) => {
    this.setState({ page });
    const { sortBy, sortType, releaseStart, releaseEnd } = this.state;
    this.getMovies(page, sortBy, sortType, releaseStart, releaseEnd);
  };

  onChangeSortType = (sortType: string) => {
    this.setState({ sortType });
    const { page, sortBy, releaseStart, releaseEnd } = this.state;
    this.getMovies(page, sortBy, sortType, releaseStart, releaseEnd);
  };

  onChangeSortBy = (sortBy: string) => {
    console.log("onChangeSortBy");
    console.log(sortBy);
    this.setState({ sortBy, releaseStart: "", releaseEnd: "" });
    const { page, sortType } = this.state;
    this.getMovies(page, sortBy, sortType, "", "");
  };

  onChangeReleaseDate = (start: string, end: string) => {
    console.log("onChangeReleaseDate");
    console.log(start);
    this.setState({ releaseStart: start, releaseEnd: end });
    const { page, sortBy, sortType } = this.state;
    this.getMovies(page, sortBy, sortType, start, end);
  };

  render() {
    let movieList = null;
    const favList = this.props.favorites ? this.props.favorites : [];
    if (this.state.movies.length > 0) {
      movieList = (
        <div>
          <Filter
            onChangePage={this.onChangePage}
            onChangeSortBy={this.onChangeSortBy}
            onChangeSortType={this.onChangeSortType}
            onChangeRelease={this.onChangeReleaseDate}
          />
          <MovieList movieList={this.state.movies} favList={favList} />
        </div>
      );
    }

    return (
      <Auxiliary>
        <div>{movieList}</div>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    genres: state.gen.genres,
    favorites: state.fav.favorites,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSetGenres: (genres: IGenre[]) => dispatch(actions.setGenre(genres)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

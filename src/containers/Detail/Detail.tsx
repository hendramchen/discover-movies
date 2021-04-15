import React, { Component } from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { IMovieDetail, initialMovieDetail } from "../../types/type.movie";
import axios from "axios";

const API_KEY = "1b869b3ccf57d089047ded4b1de007b8";
const BASE_URL = "https://api.themoviedb.org/3/";

interface IProps {
  match: any;
  movieId: number;
}

interface IState {
  detail: IMovieDetail;
}

class Detail extends Component<IProps, IState> {
  state = {
    detail: initialMovieDetail,
  };

  componentDidMount() {
    this.getDetail();
  }

  getDetail = () => {
    const ID = this.props.match.params.id;
    axios
      .get(`${BASE_URL}movie/${ID}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log("Movies");
        console.log(response.data);
        const detail = response.data;
        this.setState({ detail });
        // const payload = response.data;
        // this.setState({ payload });
        // console.log(movieList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let movie = null;
    if (this.state.detail) {
      movie = <MovieDetail detail={this.state.detail} />;
    }
    return <div>{movie}</div>;
  }
}

export default Detail;

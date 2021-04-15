import * as actionTypes from "./actions";
import { IMovie } from "../types/type.movie";

interface IAction {
  type: string;
  movie: IMovie;
  itemId: number;
}

interface IReducerState {
  movies: IMovie[];
}
const initialState: IReducerState = {
  movies: [],
};

const addMovie = (state: IReducerState, action: IAction) => {
  return {
    ...state,
    movies: state.movies.concat(action.movie),
  };
};

const removeMovie = (state: IReducerState, action: IAction) => {
  const movies = state.movies.filter((result) => result.id !== action.itemId);
  console.log("arr remove");
  console.log(movies);
  return { ...state, movies };
};

const reducer = (state: IReducerState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.ADD_FAVORIT:
      console.log("dispatch");
      console.log(action);
      return addMovie(state, action);
    case actionTypes.REMOVE_FAVORIT:
      console.log("dispatch remove");
      console.log(action);
      return removeMovie(state, action);
    default:
      return state;
  }
};

export default reducer;

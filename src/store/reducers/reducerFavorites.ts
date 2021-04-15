import * as actionTypes from "../actions";
import { IMovie } from "../../types/type.movie";

interface IAction {
  type: string;
  movie: IMovie;
  itemId: number;
}

interface IReducerState {
  favorites: IMovie[];
}
const initialState: IReducerState = {
  favorites: [],
};

const addFavorite = (state: IReducerState, action: IAction) => {
  return {
    ...state,
    favorites: state.favorites.concat(action.movie),
  };
};

const removeFavorite = (state: IReducerState, action: IAction) => {
  const favorites = state.favorites.filter(
    (result) => result.id !== action.itemId
  );
  return { ...state, favorites };
};

const reducerFavorites = (
  state: IReducerState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case actionTypes.ADD_FAVORIT:
      return addFavorite(state, action);
    case actionTypes.REMOVE_FAVORIT:
      return removeFavorite(state, action);
    default:
      return state;
  }
};

export default reducerFavorites;

import * as actionTypes from "../actions";
import { IGenre } from "../../types/type.movie";

interface IAction {
  type: string;
  genres: IGenre[];
}

interface IReducerState {
  genres: IGenre[];
}

const initialState: IReducerState = {
  genres: [],
};

const reducerGenre = (state: IReducerState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.SET_GENRE:
      console.log("dispatch");
      console.log(action);
      return {
        ...state,
        genres: action.genres,
      };
    default:
      return state;
  }
};

export default reducerGenre;

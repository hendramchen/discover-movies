import * as actionTypes from "../actions";
import { IMovie } from "../../types/type.movie";

interface IAction {
  type: string;
  sortType: string;
  sortBy: string;
  releaseStart: string;
  releaseEnd: string;
}

interface IReducerState {
  sortType: string;
  sortBy: string;
  releaseStart: string;
  releaseEnd: string;
}

const initialState: IReducerState = {
  sortType: "desc",
  sortBy: "popularity",
  releaseStart: "",
  releaseEnd: "",
};

const reducerFilter = (
  state: IReducerState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case actionTypes.CHANGE_SORT_TYPE:
      console.log("dispatch");
      console.log(action);
      return {
        ...state,
        sortType: action.sortType,
      };
    case actionTypes.CHANGE_SORT_BY:
      console.log("dispatch");
      console.log(action);
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case actionTypes.CHANGE_RELEASE_START:
      console.log("dispatch");
      console.log(action);
      return {
        ...state,
        releaseStart: action.releaseStart,
      };
    case actionTypes.CHANGE_RELEASE_END:
      console.log("dispatch");
      console.log(action);
      return {
        ...state,
        releaseEnd: action.releaseEnd,
      };
    default:
      return state;
  }
};

export default reducerFilter;

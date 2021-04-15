import { IMovie } from "../types/type.movie";
export const ADD_FAVORIT = "ADD_FAVORIT";
export const REMOVE_FAVORIT = "REMOVE_FAVORIT";
export const SORT_FAVORIT = "SORT_FAVORIT";
export const CHANGE_SORT_TYPE = "CHANGE_SORT_TYPE";
export const CHANGE_SORT_BY = "CHANGE_SORT_BY";
export const CHANGE_RELEASE_START = "CHANGE_RELEASE_START";
export const CHANGE_RELEASE_END = "CHANGE_RELEASE_END";

export const addFavorit = (movie: IMovie) => {
  return {
    type: ADD_FAVORIT,
    movie,
  };
};

export const removeFavorit = (itemId: number) => {
  return {
    type: REMOVE_FAVORIT,
    itemId,
  };
};

export const changeSortType = (sortType: string) => {
  return {
    type: CHANGE_SORT_TYPE,
    sortType,
  };
};

export const changeSortBy = (sortBy: string) => {
  return {
    type: CHANGE_SORT_BY,
    sortBy,
  };
};

export const changeReleaseStart = (releaseStart: string) => {
  return {
    type: CHANGE_RELEASE_START,
    releaseStart,
  };
};

export const changeReleaseEnd = (releaseEnd: string) => {
  return {
    type: CHANGE_RELEASE_END,
    releaseEnd,
  };
};

import { IGenre, IMovie } from "../types/type.movie";
export const ADD_FAVORIT = "ADD_FAVORIT";
export const REMOVE_FAVORIT = "REMOVE_FAVORIT";
export const SORT_FAVORIT = "SORT_FAVORIT";
export const SET_GENRE = "SET_GENRE";

export const addFavorite = (movie: IMovie) => {
  return {
    type: ADD_FAVORIT,
    movie,
  };
};

export const removeFavorite = (itemId: number) => {
  return {
    type: REMOVE_FAVORIT,
    itemId,
  };
};

export const setGenre = (genres: IGenre[]) => {
  return {
    type: SET_GENRE,
    genres,
  };
};

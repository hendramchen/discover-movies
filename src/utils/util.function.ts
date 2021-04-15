import { IGenre } from "../types/type.movie";

export const getGenres = (genreIds: number[], genres: IGenre[]) => {
  let list: string[] = [];
  if (genreIds.length > 0 && genres.length > 0) {
    genreIds.forEach((ids) => {
      genres.forEach((item) => {
        if (ids === item.id) {
          list.push(item.name);
        }
      });
    });
  }
  return list;
};

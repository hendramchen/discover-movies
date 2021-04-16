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

export const timeConvert = (num: number) => {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return hours + " Hour " + minutes + " Minutes"; // 1 Hour 47 Minute
};

export const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

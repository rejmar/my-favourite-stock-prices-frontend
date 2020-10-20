import { FavouriteStock } from "./Api/Client";
import { STOCKS } from "./constants";

export const getStockNameFromStockCode = (stockCode: string): string =>
  Object.entries(STOCKS).find((x) => x[0] === stockCode)?.[1] ?? "";

export const roundPrice = (stockPrice: number): string => stockPrice.toFixed(2);

export const sortBookmarksAsc = (array: FavouriteStock[]): FavouriteStock[] =>
  array.sort((a: FavouriteStock, b: FavouriteStock) => {
    if (a.id > b.id) return 1;
    if (b.id > a.id) return -1;
    return 0;
  });

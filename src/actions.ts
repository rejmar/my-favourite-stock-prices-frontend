import { Client, FavouriteStock, Stock } from "./Api/Client";

export const fetchStocksAction = async (): Promise<Stock[]> =>
  await new Client().getAllStocks();

export const fetchFavouriteStocksAction = async (): Promise<FavouriteStock[]> =>
  await new Client().getAllFavStocks();

export const addStockToFavouritesAction = async (
  stock: Stock
): Promise<FavouriteStock> => await new Client().addNewFavStock(stock);

export const deleteFavouriteStockAction = async (
  stockId: number
): Promise<FavouriteStock> => await new Client().deleteFavStock(stockId);

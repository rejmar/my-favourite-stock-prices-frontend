import React from "react";
import { FavouriteStock } from "../Api/Client";
import FavouriteStockTableRow from "./FavouriteStocksTableRow";

type StocksTableBodyProps = {
  data: FavouriteStock[];
  deleteBookmark: (stockId: number) => void;
};
const FavouriteStocksTableBody: React.FunctionComponent<StocksTableBodyProps> = ({
  data,
  deleteBookmark,
}: StocksTableBodyProps) => {
  return (
    <tbody data-testid={"favourite-stocks-table__body"}>
      {data.map((stock: FavouriteStock) => (
        <FavouriteStockTableRow
          key={`${stock.price}`}
          stock={stock}
          deleteFromBookmarks={deleteBookmark}
        />
      ))}
    </tbody>
  );
};

export default FavouriteStocksTableBody;

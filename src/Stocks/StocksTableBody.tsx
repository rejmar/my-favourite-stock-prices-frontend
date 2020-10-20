import React from "react";
import { Stock } from "../Api/Client";
import StockTableRow from "./StocksTableRow";

type StocksTableBodyProps = {
  data: Stock[];
  addBookmark: (stock: Stock) => void;
};
const StocksTableBody: React.FunctionComponent<StocksTableBodyProps> = ({
  data,
  addBookmark,
}: StocksTableBodyProps) => {
  return (
    <tbody data-testid={"stocks-table__body"}>
      {data.map((stock: Stock) => (
        <StockTableRow
          key={`${stock.name}`}
          stock={stock}
          addToBookmarks={addBookmark}
        />
      ))}
    </tbody>
  );
};

export default StocksTableBody;

import classNames from "classnames";
import React from "react";
import Button from "react-bootstrap/Button";
import { Stock } from "../Api/Client";
import { getStockNameFromStockCode, roundPrice } from "../utils";

type StockTableRowProps = {
  stock: Stock;
  addToBookmarks: (stock: Stock) => void;
};

const StockTableRow: React.FunctionComponent<StockTableRowProps> = ({
  stock,
  addToBookmarks,
}: StockTableRowProps) => {
  return (
    <tr
      data-testid={`stock-table__row__${stock.name}`}
      className={classNames("d-flex")}
    >
      <td
        data-testid={`stock-table__row__${stock.name}__name`}
        className={classNames("col-8")}
      >
        {getStockNameFromStockCode(stock.name)}
      </td>
      <td
        data-testid={`stock-table__row__${stock.name}__price`}
        className={classNames("col-2")}
      >
        {roundPrice(stock.price ?? 0) ?? ""}
      </td>
      <td
        data-testid={`stock-table__row__${stock.name}__action`}
        className={classNames("d-flex", "col-2", "justify-content-center")}
      >
        <Button
          className={classNames("p-1", "border-secondary", "bg-secondary")}
          onClick={() => addToBookmarks(stock)}
        >
          Add to Bookmarks!
        </Button>
      </td>
    </tr>
  );
};

export default StockTableRow;

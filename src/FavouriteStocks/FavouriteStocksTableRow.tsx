import classNames from "classnames";
import React from "react";
import Button from "react-bootstrap/Button";
import { FavouriteStock } from "../Api/Client";
import { getStockNameFromStockCode, roundPrice } from "../utils";

type StockTableRowProps = {
  stock: FavouriteStock;
  deleteFromBookmarks: (stockId: number) => void;
};

const FavouriteStockTableRow: React.FunctionComponent<StockTableRowProps> = ({
  stock: favouriteStock,
  deleteFromBookmarks,
}: StockTableRowProps) => {
  return (
    <tr
      data-testid={`favourite-stock-table__row__${favouriteStock.name}`}
      className={classNames("d-flex")}
    >
      <td
        data-testid={`favourite-stock-table__row__${favouriteStock.name}__name`}
        className={classNames("col-6")}
      >
        {getStockNameFromStockCode(favouriteStock.name) ?? ""}
      </td>
      <td
        data-testid={`favourite-stock-table__row__${favouriteStock.name}__timestamp`}
        className={classNames("col-2")}
      >
        {favouriteStock.timestamp}
      </td>
      <td
        data-testid={`favourite-stock-table__row__${favouriteStock.name}__price`}
        className={classNames("col-2")}
      >
        {roundPrice(favouriteStock.price ?? 0) ?? ""}
      </td>
      <td
        data-testid={`favourite-stock-table__row__${favouriteStock.name}__action`}
        className={classNames("d-flex", "col-2", "justify-content-center")}
      >
        <Button
          className={classNames("p-1", "border-secondary", "bg-secondary")}
          onClick={() => deleteFromBookmarks(favouriteStock.id)}
        >
          Remove Bookmark!
        </Button>
      </td>
    </tr>
  );
};

export default FavouriteStockTableRow;

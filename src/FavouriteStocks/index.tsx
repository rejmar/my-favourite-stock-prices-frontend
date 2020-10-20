import classNames from "classnames";
import React from "react";
import Table from "react-bootstrap/Table";
import FavouriteStocksTableHeader from "./FavouriteStocksTableHeader";
import FavouriteStocksTableBody from "./FavouriteStocksTableBody";
import { FavouriteStock } from "../Api/Client";

type FavouriteStocksProps = {
  data: FavouriteStock[];
  deleteBookmark: (stockId: number) => void;
};
const FavouriteStocks: React.FunctionComponent<FavouriteStocksProps> = ({
  data,
  deleteBookmark,
}: FavouriteStocksProps) => {
  return (
    <div
      data-testid="favourite-stocks"
      className={classNames(
        "d-flex",
        "flex-column",
        "w-100",
        "border",
        "border-light",
        "rounded",
        "bg-light",
        "p-2"
      )}
    >
      <h2 data-testid="favourite-stocks__label">Bookmarks</h2>
      <div
        data-testid="favourite-stocks-table"
        className={classNames("d-flex", "w-100")}
      >
        <Table striped bordered hover>
          <FavouriteStocksTableHeader />
          <FavouriteStocksTableBody
            data={data}
            deleteBookmark={deleteBookmark}
          />
        </Table>
      </div>
    </div>
  );
};

export default FavouriteStocks;

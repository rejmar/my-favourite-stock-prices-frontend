import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Stock } from "../Api/Client";
import Table from "react-bootstrap/Table";
import StocksTableBody from "./StocksTableBody";
import StocksTableHeader from "./StocksTableHeader";
import { fetchStocksAction } from "../actions";

type StocksProps = {
  addBookmark: (stock: Stock) => void;
};
const Stocks: React.FunctionComponent<StocksProps> = ({
  addBookmark,
}: StocksProps) => {
  const [stocks, setStocks] = useState<Stock[]>([] as Stock[]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchStocksAction()
        .then((res: Stock[]) => {
          setStocks(res);
        })
        .catch((err) => setStocks([]));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-testid="stocks"
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
      <h2 data-testid="stocks__label">Stock Prices</h2>
      <div data-testid="stocks_description" className={classNames("mb-2")}>
        Use the following action buttons to add stock markets to your favourites
      </div>
      <div
        data-testid="stocks__table"
        className={classNames("d-flex", "w-100")}
      >
        <Table striped bordered hover>
          <StocksTableHeader />
          <StocksTableBody data={stocks} addBookmark={addBookmark} />
        </Table>
      </div>
    </div>
  );
};

export default Stocks;

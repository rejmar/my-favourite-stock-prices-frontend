import React, { FunctionComponent, useState } from "react";
import Stocks from "./Stocks";
import "./App.scss";
import classNames from "classnames";
import ChartLogo from "./assets/line-chart.png";
import Navbar from "react-bootstrap/Navbar";
import FavouriteStocks from "./FavouriteStocks";
import { FavouriteStock, Stock } from "./Api/Client";
import {
  addStockToFavouritesAction,
  deleteFavouriteStockAction,
} from "./actions";
import { isEmpty } from "lodash";
import { sortBookmarksAsc } from "./utils";

const App: FunctionComponent = () => {
  const [bookmarks, setBookmarks] = useState<FavouriteStock[]>(
    [] as FavouriteStock[]
  );

  const handleBookmarkAdd = (stock: Stock): void => {
    const foundBookmark: FavouriteStock | undefined = bookmarks.find(
      (bookmark: FavouriteStock) => bookmark.id === stock.id
    );
    addStockToFavouritesAction(stock)
      .then((res: FavouriteStock) => {
        const updatedBookmarks = !isEmpty(foundBookmark)
          ? bookmarks.filter(
              (bookmark: FavouriteStock) => bookmark.id !== foundBookmark?.id
            )
          : bookmarks;
        console.log(
          bookmarks.filter(
            (bookmark: FavouriteStock) => bookmark.id !== foundBookmark?.id
          )
        );
        setBookmarks([...updatedBookmarks, res]);
      })
      .catch((err) => err);
  };

  const handleBookmarkDelete = (stockId: number): void => {
    deleteFavouriteStockAction(stockId)
      .then((res) => {
        setBookmarks(
          bookmarks.filter((bookmark: FavouriteStock) => bookmark.id !== res.id)
        );
      })
      .catch((err) => err);
  };

  return (
    <div
      data-testid="app"
      className={classNames("d-flex", "flex-column", "w-100", "h-100")}
    >
      <div
        data-testid="app__header"
        className={classNames(
          "d-flex",
          "w-100",
          "p-3",
          "bg-danger",
          "justify-content-center"
        )}
      >
        <img
          className={classNames("p-2", "border", "rounded", "bg-light")}
          onClick={() => window.location.reload()}
          src={ChartLogo}
          alt="chart-logo"
        />
      </div>
      <Stocks addBookmark={handleBookmarkAdd} />
      <FavouriteStocks
        data={sortBookmarksAsc(bookmarks) ?? []}
        deleteBookmark={handleBookmarkDelete}
      />
      <Navbar
        sticky="bottom"
        className={classNames("justify-content-center", "mt-3")}
      >
        Icons made by{" "}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Navbar>
    </div>
  );
};

export default App;

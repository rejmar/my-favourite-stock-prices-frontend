import classNames from "classnames";
import React, { FunctionComponent } from "react";

const FavouriteStocksTableHeader: FunctionComponent = () => {
  return (
    <thead
      data-testid="stocks-table__header"
      className={classNames("thead-dark")}
    >
      <tr className={classNames("d-flex")}>
        <th scope="col" className={classNames("col-6")}>
          Stock Name
        </th>
        <th scope="col" className={classNames("col-2")}>
          Timestamp
        </th>
        <th scope="col" className={classNames("col-2")}>
          Price
        </th>
        <th scope="col" className={classNames("col-2")}>
          Action
        </th>
      </tr>
    </thead>
  );
};

export default FavouriteStocksTableHeader;

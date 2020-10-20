import classNames from "classnames";
import React, { FunctionComponent } from "react";

const StocksTableHeader: FunctionComponent = () => {
  return (
    <thead
      data-testid="stocks-table__header"
      className={classNames("thead-dark")}
    >
      <tr className={classNames("d-flex")}>
        <th scope="col" className={classNames("col-8")}>
          Stock Name
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

export default StocksTableHeader;

import React from "react";
import { render } from "@testing-library/react";
import FavouriteStockTableRow from "../../src/FavouriteStocks/FavouriteStocksTableRow";
import { FavouriteStock } from "../../src/Api/Client";

describe("FavouriteStockTableRow component tests", () => {
  const stockMock: FavouriteStock = new FavouriteStock({
    id: 1,
    name: "APPLE",
    timestamp: "01/01/2000 01:01",
    price: 100,
  });
  const deleteActionMock: jest.Mock = jest.fn();

  it("should render", () => {
    const { getByText, getByTestId } = render(
      <FavouriteStockTableRow
        stock={stockMock}
        deleteFromBookmarks={deleteActionMock}
      />
    );

    expect(getByTestId("favourite-stock-table__row__APPLE")).toBeTruthy();
    expect(
      getByTestId("favourite-stock-table__row__APPLE__name")
    ).toBeDefined();
    expect(getByText("Apple")).toBeDefined();
    expect(
      getByTestId("favourite-stock-table__row__APPLE__timestamp")
    ).toBeDefined();
    expect(getByText("01/01/2000 01:01")).toBeDefined();
    expect(
      getByTestId("favourite-stock-table__row__APPLE__price")
    ).toBeDefined();
    expect(getByText("100.00")).toBeDefined();
    expect(
      getByTestId("favourite-stock-table__row__APPLE__action")
    ).toBeDefined();
    expect(getByText("Remove Bookmark!")).toBeDefined();
  });

  it("should dispatch action", () => {
    const { getByText } = render(
      <FavouriteStockTableRow
        stock={stockMock}
        deleteFromBookmarks={deleteActionMock}
      />
    );

    getByText("Remove Bookmark!").click();
    expect(deleteActionMock).toHaveBeenCalledTimes(1);
    expect(deleteActionMock).toHaveBeenCalledWith(stockMock.id);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import StocksTableRow from "../../src/Stocks/StocksTableRow";
import { Stock } from "../../src/Api/Client";

describe("StocksTableRow component tests", () => {
  const stockMock: Stock = new Stock({
    id: 1,
    name: "APPLE",
    price: 100,
  });
  const addToBookmarksMock: jest.Mock = jest.fn();

  it("should render", () => {
    const { getByText, getByTestId } = render(
      <StocksTableRow stock={stockMock} addToBookmarks={addToBookmarksMock} />
    );

    expect(getByTestId("stock-table__row__APPLE")).toBeTruthy();
    expect(getByTestId("stock-table__row__APPLE__name")).toBeDefined();
    expect(getByText("Apple")).toBeDefined();
    expect(getByTestId("stock-table__row__APPLE__price")).toBeDefined();
    expect(getByText("100.00")).toBeDefined();
    expect(getByTestId("stock-table__row__APPLE__action")).toBeDefined();
    expect(getByText("Add to Bookmarks!")).toBeDefined();
  });

  it("should dispatch action", () => {
    const { getByText } = render(
      <StocksTableRow stock={stockMock} addToBookmarks={addToBookmarksMock} />
    );

    getByText("Add to Bookmarks!").click();
    expect(addToBookmarksMock).toHaveBeenCalledTimes(1);
    expect(addToBookmarksMock).toHaveBeenCalledWith(stockMock);
  });
});

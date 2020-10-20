import React from "react";
import { render } from "@testing-library/react";
import StocksTableBody from "../../src/Stocks/StocksTableBody";
import { Stock } from "../../src/Api/Client";

describe("StocksTableBody component tests", () => {
  const stocksMock: Stock[] = [
    new Stock({
      id: 1,
      name: "APPLE",
      price: 100,
    }),
    new Stock({
      id: 2,
      name: "MICROSOFT",
      price: 200,
    }),
  ];
  const addBookmarkActionMock: jest.Mock = jest.fn();

  it("should render", () => {
    const { getByText, getByTestId, getAllByText } = render(
      <StocksTableBody data={stocksMock} addBookmark={addBookmarkActionMock} />
    );

    expect(getByTestId("stocks-table__body")).toBeDefined();
    expect(getByText(/Apple/)).toBeDefined();
    expect(getByText(/Microsoft/)).toBeDefined();
    expect(getByText(/100.00/)).toBeDefined();
    expect(getByText(/200.00/)).toBeDefined();
    expect(getAllByText(/Add to Bookmarks!/)).toHaveLength(2);
  });
});

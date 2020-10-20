import React from "react";
import { render } from "@testing-library/react";
import FavouriteStocksTableBody from "../../src/FavouriteStocks/FavouriteStocksTableBody";
import { FavouriteStock } from "../../src/Api/Client";

describe("FavouriteStocksTableBody component tests", () => {
  const stocksMock: FavouriteStock[] = [
    new FavouriteStock({
      id: 1,
      name: "APPLE",
      timestamp: "01/01/2000 01:01",
      price: 100,
    }),
    new FavouriteStock({
      id: 2,
      name: "MICROSOFT",
      timestamp: "01/01/2000 01:01",
      price: 200,
    }),
  ];
  const deleteActionMock: jest.Mock = jest.fn();

  it("should render", () => {
    const { getByText, getByTestId, getAllByText } = render(
      <FavouriteStocksTableBody
        data={stocksMock}
        deleteBookmark={deleteActionMock}
      />
    );

    expect(getByTestId("favourite-stocks-table__body")).toBeDefined();
    expect(getByText(/Apple/)).toBeDefined();
    expect(getAllByText("01/01/2000 01:01")).toHaveLength(2);
    expect(getByText(/Microsoft/)).toBeDefined();
    expect(getByText(/100.00/)).toBeDefined();
    expect(getByText(/200.00/)).toBeDefined();
    expect(getAllByText(/Remove Bookmark!/)).toHaveLength(2);
  });
});

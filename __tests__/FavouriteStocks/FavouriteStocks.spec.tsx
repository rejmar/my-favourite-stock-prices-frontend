import React from "react";
import renderer from "react-test-renderer";
import { FavouriteStock } from "../../src/Api/Client";
import FavouriteStocks from "../../src/FavouriteStocks";

describe("FavouriteStocks tests", () => {
  it("matches snapshot", () => {
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

    const tree = renderer
      .create(
        <FavouriteStocks data={stocksMock} deleteBookmark={deleteActionMock} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

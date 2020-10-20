import React from "react";
import renderer from "react-test-renderer";
import FavouriteStocksTableHeader from "../../src/FavouriteStocks/FavouriteStocksTableHeader";

describe("FavouriteStocksTableHeader tests", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<FavouriteStocksTableHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

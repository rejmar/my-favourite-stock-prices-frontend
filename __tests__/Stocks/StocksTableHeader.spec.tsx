import React from "react";
import renderer from "react-test-renderer";
import StocksTableHeader from "../../src/Stocks/StocksTableHeader";

describe("StocksTableHeader tests", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<StocksTableHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

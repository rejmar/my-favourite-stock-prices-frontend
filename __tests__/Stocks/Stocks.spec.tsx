import React from "react";
import { render } from "@testing-library/react";
import Stocks from "../../src/Stocks";
import { Stock } from "../../src/Api/Client";

describe("Stocks component tests", () => {
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
  const addBookmarkMock: jest.Mock = jest.fn();
  let useEffect: any;
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect").mockImplementation((f) => f());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", async () => {
    const { getByTestId, getByText } = await render(
      <Stocks addBookmark={addBookmarkMock} />
    );

    expect(getByTestId("stocks")).toBeDefined();
    expect(getByText(/Stock Prices/)).toBeDefined();
    expect(
      getByText(
        /Use the following action buttons to add stock markets to your favourites/
      )
    ).toBeDefined();
    expect(getByText(/Stock Name/)).toBeDefined();
    expect(getByText(/^Price$/)).toBeDefined();
    expect(getByText(/Action/)).toBeDefined();
    expect(useEffect).toHaveBeenCalled();
  });
});

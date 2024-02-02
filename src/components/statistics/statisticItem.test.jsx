import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { StatisticItem } from "./statisticItem";

describe("StatisticItem Component", () => {
  it("renders StatisticItem component with results", () => {
    const title = "Total Results";
    const results = 100;

    render(<StatisticItem title={title} results={results} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`${results}`)).toBeInTheDocument();
    expect(screen.getByText("Total Results")).toBeInTheDocument();
  });

  it("renders StatisticItem component with no results", () => {
    const title = "Total Results";
    const results = null;

    render(<StatisticItem title={title} results={results} />);
    expect(screen.getByText("Total Results")).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, but there are no results!")
    ).toBeInTheDocument();
  });
});

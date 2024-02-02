// ResultCounts.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { ResultCounts } from "./resultCounts";

describe("ResultCounts", () => {
  it("displays the correct result count when computedData is provided", () => {
    const computedData = [
      {
        id: "9452251",
        brand: "REVIEW",
        description: "Jumpsuit mit Ethnomuster",
        priceO: 39.95,
        priceR: 9.95,
        url: "https://www.fashionid.de/review/damen-jumpsuit-mit-ethnomuster-schwarz-9452251_7/",
        images: [
          "https://s3-eu-west-1.amazonaws.com/fid-media-prod/79831db6-6b07-410c-9c01-01a1eb3a65ac.jpg",
          "https://s3-eu-west-1.amazonaws.com/fid-media-prod/88cef2ba-a992-437f-b0f4-9f0eb4272057.png",
        ],
        sizes: ["XS", "S", "M", "L"],
      },
      {
        id: "9427344",
        brand: "Lacoste",
        description: "Poloshirt mit Logo-Badge",
        priceO: 69.95,
        url: "https://www.fashionid.de/lacoste/herren-poloshirt-mit-logo-badge-gruen-9427344_10/",
        images: [
          "https://s3-eu-west-1.amazonaws.com/fid-media-prod/2f852b18-958b-4719-9694-5d1d284c98ab.png",
          "https://s3-eu-west-1.amazonaws.com/fid-media-prod/7d09295f-4ffd-4ce0-b206-dda664d7ad14.jpg",
        ],
        sizes: ["2", "3", "4", "5", "6", "7", "8", "00"],
      },
    ];
    render(<ResultCounts computedData={computedData} />);

    expect(
      screen.getByText(`Results ${computedData.length}`)
    ).toBeInTheDocument();
  });

  it("displays 'Results 0' when computedData is not provided", () => {
    render(<ResultCounts computedData={null} />);

    expect(screen.getByText("Results 0")).toBeInTheDocument();
  });
});

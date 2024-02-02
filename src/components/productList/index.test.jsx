import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from ".";
import { DataContext } from "@/src/modules/dataProvider/useData";

const mockData = {
  data: [
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
      id: "9468361",
      brand: "Jake*s Collection",
      description: "Kleid mit Streifenmuster und Eingrifftaschen",
      priceO: 69.95,
      priceR: 55.95,
      url: "https://www.fashionid.de/jakes-collection/damen-kleid-mit-streifenmuster-und-eingrifftaschen-marineblau-9468361_1701/",
      images: [
        "https://s3-eu-west-1.amazonaws.com/fid-media-prod/307c0788-219a-4d40-b3ff-48b301643a6b.jpg",
        "https://s3-eu-west-1.amazonaws.com/fid-media-prod/9a48c8a8-7e1d-4eb2-b2e8-424bb6a1d178.png",
      ],
      sizes: ["00", "32", "34", "36", "38", "40", "42", "44", "46"],
    },
    {
      id: "9469741",
      brand: "Mariposa",
      description: "Abendkleid mit Bustier aus Spitze",
      priceO: 129.95,
      priceR: 99.95,
      url: "https://www.fashionid.de/mariposa/damen-abendkleid-mit-bustier-aus-spitze-hellrot-9469741_10/",
      images: [
        "https://s3-eu-west-1.amazonaws.com/fid-media-prod/7680811c-6d13-42f6-870a-befc49fb8020.jpg",
        "https://s3-eu-west-1.amazonaws.com/fid-media-prod/f97c9576-a052-4c1d-a709-99d4824b48cb.png",
      ],
      sizes: ["00", "34", "36", "38", "40", "42", "44", "46", "48", "50"],
    },
  ],
  maxPrice: 100,
};

jest.mock("@/src/hooks/productList", () => ({
  useGetComputedData: jest.fn((data, filters, sorts) => data),
}));

test("renders ProductList component", async () => {
  render(
    <DataContext.Provider value={mockData}>
      <ProductList />
    </DataContext.Provider>
  );

  expect(screen.getByText("Filter")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Filter"));
});

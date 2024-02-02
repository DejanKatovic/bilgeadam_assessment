import { renderHook } from "@testing-library/react";
import { useGetComputedData } from "./productList";

describe("useGetComputedData Hook", () => {
  const sampleData = [
    {
      priceO: 20,
      sizes: ["S", "M"],
    },
    {
      priceO: 30,
      sizes: ["M", "L"],
    },
  ];

  it("returns computed data with default filters and no sorts", () => {
    const { result } = renderHook(() =>
      useGetComputedData(sampleData, {
        minPrice: 0,
        maxPrice: 50,
        sizeVarieties: [],
      })
    );

    expect(result.current).toEqual(sampleData);
  });

  it("returns computed data with custom filters and sorts", () => {
    const customFilters = {
      minPrice: 10,
      maxPrice: 25,
      sizeVarieties: [{ size: "S", active: true }],
    };
    const customSorts = { param: "price", order: "asc" };

    const { result } = renderHook(() =>
      useGetComputedData(sampleData, customFilters, customSorts)
    );
  });
});

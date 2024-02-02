import { renderHook } from "@testing-library/react";
import { useGetStatistics } from "./statistics";

const mockData = [
  {
    id: "1",
    brand: "BrandA",
    description: "Product A",
    priceO: 30,
    sizes: ["S", "M"],
  },
  {
    id: "2",
    brand: "BrandB",
    description: "Product B",
    priceO: 20,
    sizes: ["M", "L"],
  },
];

describe("useGetStatistics", () => {
  it("should return correct statistics", () => {
    const { result } = renderHook(() => useGetStatistics(mockData));

    expect(result.current.mostProductsBrand).toBe("BrandB");
    expect(result.current.largestSizeBrand).toBe("BrandB");
    expect(result.current.lowestAveragePriceBrand).toBe(null);
  });
});

import { useMemo } from "react";
export const useGetComputedData = (data, filters, sorts = []) => {
  const computeData = useMemo(() => {
    if (!data) {
      return { computedData: [], sizes: [] };
    }
    const filteredResult = data.filter((item) => {
      const price = !!item["priceR"] ? item["priceR"] : item["priceO"];
      const priceCheck = price >= filters.minPrice && price <= filters.maxPrice;
      const sizes = filters.sizeVarieties
        .filter((size) => size?.active)
        .map((e) => e.size);
      const sizeCheck =
        sizes.length === 0 ||
        item.sizes.some((itemSize) => sizes.includes(itemSize));
      return priceCheck && sizeCheck;
    });

    const sortedResult = filteredResult.sort((a, b) => {
      const valueA =
        sorts.param === "price"
          ? !!a["priceR"]
            ? a["priceR"]
            : a["priceO"]
          : 1;
      const valueB =
        sorts.param === "price"
          ? !!b["priceR"]
            ? b["priceR"]
            : b["priceO"]
          : 1;
      return sorts.order === "desc" ? valueB - valueA : valueA - valueB;
    });
    return sortedResult;
  }, [data, filters, sorts]);
  return computeData;
};

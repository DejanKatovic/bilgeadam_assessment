import { useMemo } from "react";

export const useGetStatistics = (data) => {
  const mostProductsBrand = useMemo(() => {
    if (!data || data.length === 0) return null;

    const productsUnder40 = data.filter((product) => product.priceO < 40);

    if (productsUnder40.length === 0) return null;

    const brandCounts = productsUnder40.reduce((counts, product) => {
      counts[product.brand] = (counts[product.brand] || 0) + 1;
      return counts;
    }, {});

    return Object.keys(brandCounts).reduce((a, b) =>
      brandCounts[a] > brandCounts[b] ? a : b
    );
  }, [data]);

  const largestSizeBrand = useMemo(() => {
    if (!data || data.length === 0) return null;

    const brandSizes = data.reduce((sizes, product) => {
      sizes[product.brand] = [
        ...new Set((sizes[product.brand] || []).concat(product.sizes)),
      ];
      return sizes;
    }, {});

    return Object.keys(brandSizes).reduce((a, b) =>
      brandSizes[a].length > brandSizes[b].length ? a : b
    );
  }, [data]);

  const lowestAveragePriceBrand = useMemo(() => {
    if (!data || data.length === 0) return null;

    const sizeFilteredProducts = data.filter((product) =>
      product.sizes.includes("32")
    );

    if (sizeFilteredProducts.length === 0) return null;

    const brandAveragePrices = sizeFilteredProducts.reduce(
      (averages, product) => {
        averages[product.brand] = averages[product.brand] || {
          sum: 0,
          count: 0,
        };
        averages[product.brand].sum += product.priceO;
        averages[product.brand].count += 1;
        return averages;
      },
      {}
    );

    const validBrands = Object.keys(brandAveragePrices).filter(
      (brand) => brandAveragePrices[brand].count > 0
    );

    if (validBrands.length === 0) return null;

    return validBrands.reduce((a, b) => {
      const avgA = brandAveragePrices[a].sum / brandAveragePrices[a].count;
      const avgB = brandAveragePrices[b].sum / brandAveragePrices[b].count;
      return avgA < avgB ? a : b;
    });
  }, [data]);

  return {
    mostProductsBrand,
    largestSizeBrand,
    lowestAveragePriceBrand,
  };
};

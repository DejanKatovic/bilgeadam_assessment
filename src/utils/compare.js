export const sizeCompare = (a, b) => {
  const internationalSizeOrder = [
    "XXS",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "4XL",
    "5XL",
  ];
  const numA = Number(a);
  const numB = Number(b);
  return isNaN(numA)
    ? isNaN(numB)
      ? internationalSizeOrder.indexOf(a) - internationalSizeOrder.indexOf(b)
      : 1
    : isNaN(numB)
    ? -1
    : numA - numB;
};

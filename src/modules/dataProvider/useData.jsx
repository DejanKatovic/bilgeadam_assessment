import { useContext, createContext } from "react";

export const DataContext = createContext({
  data: [],
  maxPrice: 100,
  allSizes: [],
});
export const useDataContext = () => {
  const data = useContext(DataContext);
  return data;
};

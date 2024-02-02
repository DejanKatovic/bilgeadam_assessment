"use client";
import React, { useEffect, useState, useMemo } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import { getData } from "@/src/queries/list";
import { sizeCompare } from "../../utils/compare";
export { useDataContext as useData } from "./useData";
import { DataContext } from "./useData";

const FetchAndEnsureData = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  let wholeSizes = [];
  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const maxPrice = useMemo(
    () =>
      data.reduce((prev, curr) => {
        const price = !!curr["priceR"] ? curr["priceO"] : curr["priceO"];
        return prev < price ? price : prev;
      }, 0),
    [data]
  );

  const allSizes = useMemo(() => {
    const sizeSets = data.flatMap((element) => element.sizes);
    wholeSizes = [...new Set([...wholeSizes, ...sizeSets])];
    return wholeSizes.sort(sizeCompare);
  }, [data]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height: "inherit",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h4" sx={{ textAlign: "center", color: "danger" }}>
        Something went wrong! Please try again later!
      </Typography>
    );
  }
  return (
    <DataContext.Provider value={{ data, maxPrice, allSizes }}>
      {children}
    </DataContext.Provider>
  );
};

export default FetchAndEnsureData;

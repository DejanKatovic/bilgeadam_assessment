import React from "react";
import { Typography } from "@mui/material";

export const ResultCounts = ({ computedData }) => {
  return (
    <Typography>
      Results {!!computedData && computedData?.length ? computedData.length : 0}
    </Typography>
  );
};

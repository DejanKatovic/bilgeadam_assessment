import React from "react";
import { Divider, Typography, Box } from "@mui/material";

export const StatisticItem = ({ title, results }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Divider />
      <Box sx={{ mt: 2 }}>
        {!!results ? (
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontStyle: "italic",
            }}
          >
            {results}
          </Typography>
        ) : (
          <Typography variant="body1" color="textSecondary">
            Sorry, but there are no results!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

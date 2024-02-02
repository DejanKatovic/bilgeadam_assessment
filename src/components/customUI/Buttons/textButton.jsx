import React from "react";
import { Box, Button } from "@mui/material";

export const TextButton = ({ children, sx, ...props }) => {
  return (
    <Button
      sx={{
        color: "text.secondary",
        fontWeight: 600,
        fontSize: { xs: 10, md: 12, lg: 14 },
        ...sx,
      }}
      variant="text"
      {...props}
    >
      {children}
    </Button>
  );
};

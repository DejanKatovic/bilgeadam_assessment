import React from "react";
import { Button } from "@mui/material";

export const PropButton = ({ element, setMainFilters }) => {
  return (
    <Button
      sx={{
        fontWeight: 600,
        fontSize: { xs: 12, md: 14, lg: 16 },
        maxWidth: { xs: 40, md: 50, lg: 60 },
      }}
      variant={element.active === true ? "contained" : "outlined"}
      onClick={() =>
        setMainFilters((prev) => {
          return {
            ...prev,
            sizeVarieties: prev.sizeVarieties?.map((sizeElement) =>
              sizeElement.size === element.size
                ? { ...sizeElement, active: !sizeElement.active }
                : sizeElement
            ),
          };
        })
      }
    >
      {element.size}
    </Button>
  );
};

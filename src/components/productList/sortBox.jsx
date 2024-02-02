import React from "react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { SORT_PARAMS } from "@/src/constants/productList";

const SortBox = ({ mainSorts, setMainSorts }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const [param, order] = value.split("-");
    setMainSorts({ param: param, order: order });
  };
  return (
    <Box>
      <FormControl
        sx={{
          cursor: "pointer",
        }}
      >
        <Select
          onChange={handleChange}
          value={`${mainSorts.param}-${mainSorts.order}`}
        >
          {SORT_PARAMS.map((param) => (
            <MenuItem
              key={param.title}
              value={`${param.value.key}-${param.value.order}`}
            >
              {param.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBox;

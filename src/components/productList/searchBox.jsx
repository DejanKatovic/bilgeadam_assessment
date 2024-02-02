import React, { useEffect } from "react";
import { Box, Slider, List } from "@mui/material";
import { useData } from "@/src/modules/dataProvider";
import { convertNumberToUSD } from "@/src/utils/currency";
import { MIN_PRICE_DISTANCE } from "@/src/constants/productList";
import { CollapseListItem } from "../customUI/List/collapseListItem";
import { PropButton } from "../customUI/Buttons/propButton";
import { TextButton } from "../customUI/Buttons/textButton";
import { ResultCounts } from "./resultCounts";

const SearchBox = ({
  mainFilters,
  setMainFilters,
  handleDrawerClose,
  computedData,
}) => {
  const { maxPrice, allSizes } = useData();
  const priceRange = [mainFilters.minPrice, mainFilters.maxPrice];
  useEffect(() => {
    console.log(allSizes);
    if (allSizes && allSizes.length > 0) {
      setMainFilters((prev) => {
        return {
          ...prev,
          sizeVarieties: allSizes.map((size) => {
            return { size: size, active: false };
          }),
        };
      });
    }
  }, [allSizes]);

  const handleSliderChange = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setMainFilters({
        ...mainFilters,
        minPrice: Math.min(
          newValue[0],
          mainFilters.maxPrice - MIN_PRICE_DISTANCE
        ),
      });
    } else {
      setMainFilters({
        ...mainFilters,
        maxPrice: Math.max(
          newValue[1],
          mainFilters.minPrice + MIN_PRICE_DISTANCE
        ),
      });
    }
  };
  return (
    <Box sx={{ width: "inherit" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pl: 2,
          display: { xs: "block", sm: "none" },
        }}
      >
        <ResultCounts computedData={computedData} />
        <TextButton sx={{ fontSize: 20 }} onClick={handleDrawerClose}>
          X
        </TextButton>
      </Box>
      <Box sx={{ px: 2, py: 1, display: "flex", justifyContent: "end" }}>
        <TextButton
          onClick={() =>
            setMainFilters((prev) => {
              return {
                minPrice: 0,
                maxPrice: maxPrice,
                sizeVarieties: prev.sizeVarieties.map((sizeElement) => {
                  return { ...sizeElement, active: false };
                }),
              };
            })
          }
          sx={{}}
        >
          clear all
        </TextButton>
      </Box>
      <List>
        <CollapseListItem title={"Price Range"}>
          <Slider
            getAriaLabel={() => "Price Range"}
            value={priceRange}
            onChange={handleSliderChange}
            min={0}
            max={maxPrice}
            valueLabelDisplay="auto"
            getAriaValueText={(value) => `$${convertNumberToUSD(value)}`}
            disableSwap
            marks={[
              {
                value: mainFilters.minPrice,
                label: convertNumberToUSD(mainFilters.minPrice),
              },
              {
                value: mainFilters.maxPrice,
                label: convertNumberToUSD(mainFilters.maxPrice),
              },
            ]}
          />
        </CollapseListItem>
        <CollapseListItem title={"Sizes"}>
          {mainFilters.sizeVarieties?.map((element, index) => (
            <PropButton
              key={`${index}-${element.size}`}
              element={element}
              setMainFilters={setMainFilters}
            />
          ))}
        </CollapseListItem>
      </List>
    </Box>
  );
};

export default SearchBox;

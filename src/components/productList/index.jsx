"use client";
import React, { useState } from "react";
import { Box, Drawer, Grid, Divider, Typography } from "@mui/material";
import { useData } from "@/src/modules/dataProvider";
import ProductCard from "./productCard";
import SearchBox from "./searchBox";
import SortBox from "./SortBox";
import { useGetComputedData } from "@/src/hooks/productList";
import { DRAWER_WIDTH } from "@/src/constants/productList";
import { TextButton } from "../customUI/Buttons/textButton";
import { ResultCounts } from "./resultCounts";

const ProductList = ({}) => {
  const { data, maxPrice } = useData();
  const [showProductCounts, setShowProductCounts] = useState(24);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const [mainFilters, setMainFilters] = useState({
    minPrice: 0,
    maxPrice: maxPrice,
    sizeVarieties: [],
  });
  const [mainSorts, setMainSorts] = useState({
    param: "price",
    order: "desc",
  });
  const computedData = useGetComputedData(data, mainFilters, mainSorts);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
          borderBottom: "1px solid black",
          width: "100%",
          alignItems: "center",
        }}
      >
        <ResultCounts computedData={computedData} />
        <SortBox mainSorts={mainSorts} setMainSorts={setMainSorts} />
        <Box
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" }, cursor: "pointer" }}
        >
          Filter
        </Box>
      </Box>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            p: 2,
          },
        }}
      >
        <SearchBox
          mainFilters={mainFilters}
          setMainFilters={setMainFilters}
          handleDrawerClose={handleDrawerClose}
          computedData={computedData}
        />
      </Drawer>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            width: DRAWER_WIDTH,
          }}
        >
          <SearchBox
            mainFilters={mainFilters}
            setMainFilters={setMainFilters}
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            p: 2,
          }}
        >
          {computedData.length ? (
            <>
              <Grid container spacing={2}>
                {computedData.slice(0, showProductCounts).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Grid>
              {showProductCounts < computedData.length - 1 && (
                <TextButton
                  sx={{ width: "100%", mt: 2 }}
                  onClick={() => setShowProductCounts(Infinity)}
                >
                  Show All
                </TextButton>
              )}
            </>
          ) : (
            <Box>
              <Typography>
                There is no result but You might interested in these product!
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Grid container spacing={2}>
                {data.slice(0, 11).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProductList;

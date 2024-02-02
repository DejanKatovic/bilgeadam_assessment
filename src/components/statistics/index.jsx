"use client";
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { StatisticItem } from "./statisticItem";
import { useGetStatistics } from "@/src/hooks/statistics";
import { useData } from "@/src/modules/dataProvider";

const Statistics = () => {
  const { data } = useData();
  const { mostProductsBrand, lowestAveragePriceBrand, largestSizeBrand } =
    useGetStatistics(data);
  const FAQs = [
    {
      question: "which brand has the most products that cost less than 40 EUR",
      results: mostProductsBrand,
    },
    {
      question:
        "which brand offers the largest selection of sizes to the customer",
      results: largestSizeBrand,
    },
    {
      question: `which brand offers the lowest average price for customers wearing size “32”`,
      results: lowestAveragePriceBrand,
    },
  ];
  return (
    <Container>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={3}>
          {FAQs.map((query) => (
            <Grid item key={query.question} xs={12} sm={6} md={4}>
              <StatisticItem title={query.question} results={query.results} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
export default Statistics;

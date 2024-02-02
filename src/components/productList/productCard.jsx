import React from "react";
import Image from "next/image";
import { Box, Card, CardContent, Typography, Grid, Chip } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const ProductCard = ({ product }) => {
  const { brand, description, priceO, priceR, url, images, sizes } = product;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          backgroundColor: grey[100],
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            cursor: "pointer",
            position: "relative",
          }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          <Image
            src={images[0]}
            alt={description}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            priority
            width={400}
            height={600}
          />
          <Chip
            label={!!priceR ? `${((priceR / priceO) * 100).toFixed(0)}%` : ""}
            size="small"
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              display: !!priceR ? "flex" : "none",
              bgcolor: red[700],
              color: "white",
            }}
          />
        </Box>

        <CardContent
          sx={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              {brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                gap: 2,
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  color: red[900],
                  fontSize: { xs: 14, md: 18 },
                  display: !!priceR ? "flex" : "none",
                }}
              >
                ${priceR}
              </Typography>
              <Typography
                component={"span"}
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: 14, md: 18 },
                  textDecoration: !!priceR ? "line-through" : "none",
                }}
              >
                ${priceO}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {sizes.map((size, index) => (
                <Box
                  sx={{
                    p: 0.5,
                    borderRadius: 2,
                    backgroundColor: grey[50],
                    minWidth: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={index}
                >
                  <Typography
                    component={"span"}
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: 12, md: 14 },
                      fontWeight: 600,
                    }}
                  >
                    {size}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;

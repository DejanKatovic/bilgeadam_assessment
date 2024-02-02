"use client";
import React from "react";

import {
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
export const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          background: (theme) => theme.palette.background.paper,
          transition: "background 0.3s",
        }}
      >
        <Toolbar sx={{ px: 0 }}>
          <Container maxWidth={"xl"} sx={{ px: { xs: 2, md: 3, xl: 4 } }}>
            <Typography component={"h1"} fontSize={20} color={"black"}>
              BilgeAdam Fashion Products
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

import React from "react";
import { Box, Container } from "@mui/material";
import { Header } from "./components/header";
export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Container sx={{ pr: "2rem", pl: 0 }}>
        <Header />
      </Container>
      <Container
        maxWidth={"xl"}
        sx={{ px: { xs: 2, md: 3, xl: 4 }, height: "100%", flexGrow: 1 }}
      >
        {children}
      </Container>
    </Box>
  );
};

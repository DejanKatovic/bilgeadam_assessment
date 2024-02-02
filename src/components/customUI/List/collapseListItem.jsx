import React, { useState } from "react";
import { ListItem, Collapse, List } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

export const CollapseListItem = ({ title, children, sx }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <ListItem
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          ...sx,
        }}
      >
        {title}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{}}>
          <ListItem
            sx={{ flexWrap: "wrap", display: "flex", justifyContent: "center" }}
          >
            {children}
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./SearchBar.css"
export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        width:{xs:"80%",md:"40%"}
      }}
    >
      <input
        type="text"
        className="searchbar"
        placeholder="ابحث عن متجر و كوبنات و خصومات"
      />
      <IconButton type="submit" sx={{ p: "10px", color: "rgb(102,45,145,1)" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

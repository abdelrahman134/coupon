import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./SearchBar.css"
import { Input } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { SearchInput } from "../../redux/search";
export default function SearchBar({setSearchInput}) {
  // const dispatch = useDispatch();
  const handleChange = (e) => {
    // setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSearchInput(e.target.value);
    // dispatch(SearchInput(e.target.value));

  };

  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        width: { xs: "60%", md: "40%" },
      }}
    >
      <input
        type="text"
        className="searchbar"
        placeholder="ابحث عن كوبونات و خصومات"
        onChange={handleChange}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "rgb(102,45,145,1)" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

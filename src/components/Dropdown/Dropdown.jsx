import './Dropdown.css';
import AE from "../../assets/AE.webp"
import EG from "../../assets/EG.webp";
import KE from "../../assets/KE.webp";
import SA from "../../assets/SA.webp";
import all from "../../assets/all.webp";

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import q from "../../assets/q.jpeg"
import b from "../../assets/b.jpeg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Dropdown({handleClick}) {
  const [age, setAge] = React.useState('');

React.useEffect(()=>{
  handleClick(age)
},[age])
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <Box sx={{ width: "125px", height: "40px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">البلد</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"السعودية"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                direction: "row",
                gap: "5px",
              }}
            >
              <LazyLoadImage className="dropImg" src={SA} alt="pic" />
              <Typography>SA</Typography>
            </Box>
          </MenuItem>
          <MenuItem value={"الأمارات"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                direction: "row",
                gap: "5px",
              }}
            >
              <LazyLoadImage className="dropImg" src={AE} alt="pic" />
              <Typography>AE</Typography>
            </Box>
          </MenuItem>
          <MenuItem value={"الكويت"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                direction: "row",
                gap: "5px",
              }}
            >
              <LazyLoadImage className="dropImg" src={KE} alt="pic" />

              <Typography>KE</Typography>
            </Box>
          </MenuItem>
          <MenuItem value={"قطر"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                direction: "row",
                gap: "5px",
              }}
            >
              <LazyLoadImage className="dropImg" src={q} alt="pic" />

              <Typography>QA</Typography>
            </Box>
          </MenuItem>
          <MenuItem value={"البحرين"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                direction: "row",
                gap: "5px",
              }}
            >
              <LazyLoadImage className="dropImg" src={b} alt="pic" />

              <Typography>BA</Typography>
            </Box>
          </MenuItem>{" "}
          <MenuItem value={"مصر"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                direction: "row",
                gap: "5px",
              }}
            >
              <LazyLoadImage className="dropImg" src={EG} alt="pic" />

              <Typography>EG</Typography>
            </Box>
          </MenuItem>
          <MenuItem value={"كل الدول"}>
            <Box
              sx={{ display: "flex", direction: "row", alignItems: "center" }}
            >
              <LazyLoadImage className="dropImg" src={all} alt="pic" />

              <Typography>كل الدول</Typography>
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );}
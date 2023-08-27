import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import "./addBanner.css";
import AddDropdown, { Country } from "../../components/AddDropdown/AddDropdown";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginFailure } from "../../redux/user";

export default function AddBanner() {
  const [img, setImg] = useState();
  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  };
  const axiosInstance = axios.create({
    baseURL: "https://api.easycodesa.com/",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [coupon, setCoupon] = React.useState({
    name: "",
    link: "",

  });
  const handleChange = (e) => {
    setCoupon((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("img", img);
      formData.append("name", coupon.name);
      formData.append("link", coupon.link);
      const res = await axiosInstance.post("addBanner", formData, {
        withCredentials: true,
      });
     
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <Stack
      direction="row"
      sx={{ height: "80vh", alignItems: "center", justifyContent: "center" }}
    >
      <Stack
        sx={{
          border: "2px solid grey",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ marginBottom: "20px ", fontSize: "20px", fontWeight: "bold" }}
        >
          ادخل اعلان جديد
        </Typography>
        <Box sx={{ display: "grid", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              textAlign: "right",
              justifyContent: "space-between",
            }}
          >
            <input
              className="inputcoup"
              type="text"
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <Typography sx={{ textAlign: "right" }}>اسم اعلان</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <input
              className="inputcoup"
              type="text"
              name="link"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <Typography>الينك</Typography>
          </Box>
          
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input className="file" type="file" onChange={onInputChange} />
          <Typography sx={{ marginLeft: "15px" }}>logo</Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            backgroundColor: "rgb(102,45,145,1)",
            width: "100%",
            fontSize: "20px",
          }}
          onClick={(e) => handleLogin(e)}
        >
          حفظ
        </Button>
      </Stack>
    </Stack>
  );
}

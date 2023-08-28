import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import "./addCoupon.css"
import AddDropdown, { Country } from '../../components/AddDropdown/AddDropdown';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginFailure } from '../../redux/user';
import axiosInstance from "../../axiosInstance.js";

export default function AddCoupon() {
    const[img,setImg]=useState()
    const onInputChange=(e)=>{
        setImg(e.target.files[0])
    }
const [country, setCountry] = useState();

const dispatch=useDispatch()
const handleCont = (value) => {
  setCountry(value);
};
 const navigate = useNavigate();
const [coupon, setCoupon] = React.useState({
  	companyName: ""
  ,
    discount:"",
    couponCode: "",
    siteLink: "",
});
const handleChange = (e) => {
  setCoupon((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
const handleLogin = async (e) => {
      e.preventDefault();
     
  try {
       const formData = new FormData();
       formData.append("img", img);
       formData.append("companyName", coupon.companyName);
       formData.append("discount", coupon.discount);
       formData.append("couponCode", coupon.couponCode);
       formData.append("siteLink", coupon.siteLink);
       formData.append("country", country);
    e.preventDefault();
     

          
          
          
    const res = await axiosInstance.post("add", formData, {
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
            ادخل كوبون جديد
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
                name="companyName"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <Typography sx={{ textAlign: "right" }}>اسم الشركه</Typography>
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
                name="discount"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <Typography>الخصم</Typography>
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
                name="couponCode"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <Typography>كويون كود</Typography>
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
                name="siteLink"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <Typography>لبنك الموفع</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <AddDropdown handleCont={handleCont}/>

              <Typography sx={{ marginLeft: "15px" }}>البلد</Typography>
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
            onClick={(e)=>handleLogin(e)}
          >
            حفظ
          </Button>
        </Stack>
      </Stack>
    );
}

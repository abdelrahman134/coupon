import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo1.png";
import ins from "../../assets/1.png";
import tel from "../../assets/2.png";
import wh from "../../assets/3.png";

import "./Footer.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Footer() {
  const country = [
    "السعودية",
   "الأمارات",
    "الكويت",
    "قطر",
    "البحرين",
    "مصر",
  ];

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        backgroundColor: "#662d90",
        flexWrap: "wrap",
        justifyContent: "space-around",

        gap: "20px",
        padding: "30px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "center" },
        }}
      >
        <LazyLoadImage src={logo} className="img1" alt="pic" />

        <Typography
          sx={{
            marginTop: { xs: "0px", md: "60px" },
            display: { xs: "none", md: "block" },
          }}
        >
          ©Copyright. Easy Code rights are reserved
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gap: "10px",
          alignItems: "center",
          textAlign: "center",
          marginBottom: { xs: "0px", md: "30px" },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "30px", marginBottom: "10px" }}
        >
          تابعنا علي
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <a
            className="icons"
            href="https://api.whatsapp.com/message/DG5NAZFB7N5GN1?autoload=1&app_absent=0"
          >
            <LazyLoadImage className="social" src={wh} alt="pic" />
          </a>

          <a className="icons" href="https://t.me/EasyCodesa_bot">
            {" "}
            <LazyLoadImage className="social" src={tel} alt="pic" />
          </a>

          <a className="icons" href="https://www.instagram.com/Easycode.sa">
            {" "}

            <LazyLoadImage className="social" src={ins} alt="pic" />
          </a>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "80px" }}>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            textAlign: "center",
            marginBottom: { xs: "0px", md: "30px" },
            padding: "0px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "30px", marginBottom: "10px" }}
          >
            تابعنا علي
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <a
              className="icons"
              href="https://api.whatsapp.com/message/DG5NAZFB7N5GN1?autoload=1&app_absent=0"
            >
              <img className="social" src={wh} alt="" />
            </a>

            <a className="icons" href="https://t.me/EasyCodesa_bot">
              {" "}
              <img className="social" src={tel} alt="" />
            </a>

            <a className="icons" href="https://www.instagram.com/Easycode.sa">
              {" "}
              <img className="social" src={ins} alt="" />
            </a>
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: "30px", textAlign: "right", fontWeight: "400" }}
          >
            الدول
          </Typography>
          {country.map((item) => (
            <Typography
              sx={{
                textAlign: "right",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
      <Typography
        sx={{
          marginTop: { xs: "0px", md: "60px" },
          display: { xs: "block", md: "none" },
        }}
      >
        ©Copyright. Easy Code rights are reserved
      </Typography>
    </Stack>
  );
}

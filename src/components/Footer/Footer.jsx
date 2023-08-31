import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo1.png";
import ins from "../../assets/1.png";
import tel from "../../assets/2.png";
import wh from "../../assets/3.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Footer.css"
export default function Footer() {
  const country = [
      "الأمارات",
    "الكويت",
    "مصر",
    "قطر",
    "البحرين",
    "السعوديه",
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
        <img src={logo} className="img1" alt="" />
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
      <Box sx={{ display: "flex", gap: "80px" }}>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection:"column",
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

import { Box, Typography } from '@mui/material'
import React from 'react'

import "./about.css"
export default function AboutUs() {
  return (
    <Box sx={{ padding: { xs: "40px 30px", md: "40px 60px" },textAlign:"center" }}>
      <Typography variant="h2"> من نحن</Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }}}>
        
        
        <Typography sx={{marginTop:"20px",fontSize:"18px",width:{xs:"100%",md:"60%"},margin:"20px auto"}}>
          ايزي كود هو أهم وأفضل كوبونات خصم لجميع المواقع والمتاجر العربية ويقوم
          بجمع آلاف الاكواد وكوبونات الخصم بإستخدام الذكاء الاصطناعي والرد آلياً
          بسرعة فائقه في الواتس اب والتليقرام العروض والخصومات الفعالة في 2023
        </Typography>
      </Box>
    </Box>
  );
}

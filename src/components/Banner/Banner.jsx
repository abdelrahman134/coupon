// import React from "react";
// import orange from "../../assets/Orange.png";
// import { Box, Typography } from "@mui/material";
// export default function Banner() {
//   console.log(orange);
//   return (
    // <Box
    //   className="banner"
    //   sx={{
    //     background: `url(${orange}) center/cover fixed no-repeat`,
    //     width: "100vw",
    //     height: "300px",
    //     position: "relative",
    //     objectFit: "cover",
    //   }}
//     >
      // <Box
      //   sx={{
      //     backgroundColor: "rgb(0,0,0,0.6)",
      //     width: "100%",
      //     textAlign: "center",
      //     zIndex: "1",
      //     position: "absolute",
      //     top: "0px",
      //     left: "0px",
      //     right: "0px",
      //     bottom: "0px",
      //     display:"flex",
      //     alignItems:"center",
      //     justifyContent:"center"
      //   }}
      // >
      //   <Typography sx={{fontSize:"70px" ,color:"white"}}>اقوي العروض</Typography>
      // </Box>
//     </Box>
//   );
// }

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import orange from "../../assets/Orange.png";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
              import DeleteIcon from "@mui/icons-material/Delete";
  
import { Box, Button, Typography } from '@mui/material';
import "./Banner.css"
 function Banner({data,role,deleteBanner}) {
  const handleClick = (e) => {
    deleteBanner(e.currentTarget.id);

  };
  


  return (
    <>
      <Box>
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide id={item.id}>
              <Box
                className="banner"
                sx={{
                  background:item.img ? `url(${require("../../../build/uploads/" + item.img)}) center/cover fixed no-repeat` : "",
                  width: "100vw",
                  height: "52vh",
                  position: "relative",
                  objectFit: "cover",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgb(0,0,0,0.6)",
                    width: "100%",
                    textAlign: "center",
                    zIndex: "1",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {(role || "emp") == "Admin" ? (
                    <div id={item._id} onClick={handleClick}>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          cursor: "pointer",
                          color: "red",
                          fontSize: "30px",
                        }}
                      >
                        <DeleteIcon i />
                      </Box>
                    </div>
                  ) : (
                    ""
                  )}
                  <Typography sx={{ fontSize: "70px", color: "white" }}>
                    {item.name}
                  </Typography>
                  {item.link && (
                    <a href={item.link}>
                      {" "}
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "rgb(102,45,145,1)",
                          color: "white",
                          width: "100%",
                          marginTop: "10px",
                        }}
                      >
                        زيارة الموقع
                      </Button>
                    </a>
                  )}
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );}


export default Banner;
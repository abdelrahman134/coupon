import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Cards from '../../components/Card/Card';
import {data} from "../../components/data"
import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';
import Helmet from "react-helmet"
import orange from "../../assets/Orange.png";
import AboutUs from '../../components/AboutUs/AboutUs';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axiosInstance from '../../axiosInstance.js';
export default function Home() {
  const [countryFliter,setCountryFilter]=useState([])
  const [data1,setData1]=useState()
  const [filterData,setFilterData]=useState()
  const {currentUser}=useSelector(state=>state)
const [banner,setBanner]=useState([])

const role =currentUser?.role?currentUser.role:"emp"

  const handleClick=(value)=>{
 setCountryFilter(value) 
}
      // const filterFun = (value) => {
        // data.filter((item)=>{
        //   if(value=="كل الدول"||value==undefined){
        //    return data
        //   }else{
        //     return value == item.avability;
        //   }
        // })
      // };
  const deleteFun = async (id) => {
    try {
      axiosInstance.delete(`delete/${id}`, {
        withCredentials: true,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const deleteBanner = async (id) => {
    try {
      axiosInstance.delete(`deleteBanner/${id}`, {
        withCredentials: true,
      });
    } catch (e) {
      console.log(e);
    }
  };    
      useEffect(()=>{
        const getCoupon=async()=>{
          try{
            const res=await axiosInstance.get("get",{ withCredentials: true})
            setData1(res.data)
          
            

          }catch(e){
            console.log(e);
          }
        }
        const getBanner = async () => {
          try {
            const res = await axiosInstance.get("getBanner", {
              withCredentials: true,
            });
            setBanner(res.data);
          } catch (e) {
            console.log(e);
          }
        };
        getBanner()
        getCoupon()
        setFilterData(
          data1?.filter((item) => {
            if (countryFliter == "كل الدول" || countryFliter == false) {
              return item;
            } else {
              console.log(item.avability);
              return countryFliter == item.country;
            }
          })
        );
        
      },[countryFliter])

      ;
  return (
    <Stack
      flexDirection="column"
      sx={{
        backgroundColor: "#f2f2f2",
        height: "100%",
        textAlign: "right",
        gap: "20px",
      }}
    >
      <Helmet>
        <title>Easy Code</title>

        <meta
          name="description"
          content="ايزي كود هو أهم وأفضل كوبونات خصم لجميع المواقع والمتاجر العربية ويقوم بجمع آلاف الاكواد وكوبونات الخصم بإستخدام الذكاء الاصطناعي 2023"
        />
        <meta
          name="keywords"
          content="كوبون/كود, خصم/تخفيض, عرض, مجانًا/مجاني, توفير/وفر, صفقة, إكسبيري, تسوق الآن, توصيل مجاني, مخزون محدود, تنزيلات, عروض حصرية, تخفيضات مفتوحة, إتمام شراء, تنزيلات نهاية العام, عروض جديدة, أفضل تغطية, خصومات تصل حتى, جديد الوصول, عروض رائعة, روابط تابعة, أخبار التوصيل, تركيبات معينة مجانية, بدء التسوق, يمكنك أيضًا, تفاصيل العرض, تفاصيل الكوبون, المزيد من الخصومات, المزيد من الإكسسوارات, آخر فرصة, أحدث التنزيلات, الخصم الخاص بك, تفاصيل الطلب, أكبر تخفيضات, خصومات لفترة محدودة, تعرف على المزيد, خصومات موسمية, فرصة لا تعوض, المساعدة والدعم, رقم التتبع, تلقائيًا بالسلة, عروض الإعلانات الجديدة, عروض الاشتراك, خصومات مدروسة, عروضي الشهرية, مجموعة مختارة, توفير المال, سوبر خصومات, برامج الولاء, تخفيضات أسبوعية, مبيعات الموسم, الحصول على أفضل العروض, خصومات الوقت المحدود, عروض شحن جديدة, كوبونات الهدايا, خصومات 24 ساعة, الاشتراك في النشرة الإخبارية, تخفيضات العطلات, عروض الموسم الجديد, خصم العضوية, عروض ترويجية, توصيل فوري, برنامج الابتسامة, خصم على طلبك, كوبونات مجانية, تسوق أكثر, خصومات شهرية, توفير فائق, خصومات العودة للمدارس, عروض سريعة, مجموعة متنوعة, شحن مجاني, عروض منتجات بطاقات الهدايا, خصومات لفترة محدودة فقط, عروض الفنادق, تخفيضات جديدة, خصومات الماركات, تخفيضات تموز, خصم 10%, تفاصيل العملية, توفير كبير, عروض شراء متعددة, تخفيضات عطلة نهاية الأسبوع, عروض وخصومات, خصومات على منتجات مختارة, عروض شهر مايو, الحصول على المزيد مع أقل, كوبون شحن مجاني, تخفيضات في آب, تخفيضات الهدية, العروض الجوية, كوبون التسوق, خصم خاص, عروض الفنادق الحصرية, تسوق في المنزل, خصومات منتجات الموسم, عروض الألعاب, تخفيضات لساعات محدودة, الشحن في اليوم التالي, خصومات بمناسبة العطلات , كواد ، اكواد خصم ، خصم ، خصومات ، كوبونات خصم ، كوبون خصم ، كوبون ، كوبونات ، خصومات المتاجر ، عروض ، عروض و خصومات ، بوابة الخصومات ، وفر ، موقع الموفر ، promo code , code , أكواد ، خصم حصري"
        />
      </Helmet>
      <Box sx={{ display: "flex", marginTop: "70px", gap: "10px" }}>
        <Link to="/login">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(102,45,145,1)",
            }}
          >
            تسجيل الدخول
          </Button>
        </Link>
        <Link to="register">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(102,45,145,1)",
            }}
          >
            ادخال كوبونك
          </Button>
        </Link>
      </Box>
      <Banner
        data={banner}
        deleteBanner={deleteBanner}
        role={role}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          padding: { xs: "40px 30px", md: "40px 60px" },
        }}
      >
        <Dropdown handleClick={handleClick} />
        <Typography sx={{ fontSize: "30px" }} variant="h1">
          كوبونات خصم 2023
        </Typography>
      </Box>
      {role == "Admin" ? (
        <Box sx={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
          <Link to="/addCoupon">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(102,45,145,1)",
              }}
            >
              ادخال الكوبون
            </Button>
          </Link>
          <Link to="/addBanner">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(102,45,145,1)",
              }}
            >
              ادخال اعلانك
            </Button>
          </Link>
        </Box>
      ) : (
        ""
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          flexWrap: "wrap",
          gap: "30px",
          padding: { xs: "40px 30px", md: "40px 60px" },
        }}
      >
        {(filterData || data1)?.map((item) => (
          <Cards
            item={item}
            key={item.id}
            id={item._id}
            role={role}
            deleteFun={deleteFun}
          />
        ))}
      </Box>
      <AboutUs />
    </Stack>
  );
}

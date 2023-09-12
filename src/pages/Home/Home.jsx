import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import Cards from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';
import Helmet from "react-helmet"
import AboutUs from '../../components/AboutUs/AboutUs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axiosInstance from '../../axiosInstance.js';
import Services from '../../components/Services/Services';
import SearchBar from "../../components/SearchBar/SearchBar";
export default function Home() {
  const [countryFliter,setCountryFilter]=useState([])
  const [data1,setData1]=useState()
  const [filterData,setFilterData]=useState()
  const {currentUser}=useSelector(state=>state)
  // const {Searchvalue} = useSelector((state) => state.search);

  const [SearchInput,setSearchInput ] = useState();
// console.log(currentUser);
  const [banner,setBanner]=useState([])
const keys=["companyName","discount"]
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
        setFilterData(data1?.filter((item) => {
         
            if (countryFliter === "كل الدول" || countryFliter == false) {
              return item;
            } else {
              if (Array.isArray(item.country)) {

                return (
                 
                  item.country.includes(countryFliter) ||
                  item.country.includes("كل دول")
                );
              } else {
                   

                
                return (
                  
                  countryFliter == item.country );
              }
            }
          })
          .filter((item) =>{
          if (!SearchInput ) {
            return item;
          } else {
            return keys.some((key) =>
              item[key].toLowerCase().includes(SearchInput)
            );
          }})
          
        );

      },[countryFliter,SearchInput])


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
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="android-chrome-192x192.png" />

        <meta
          name="description"
          content="ايزي كود هو أهم وأفضل كوبونات خصم لجميع المواقع والمتاجر العربية ويقوم بجمع آلاف الاكواد وكوبونات الخصم بإستخدام الذكاء الاصطناعي 2023"
        />
        <meta
          name="keywords"
          content="كوبون/كود, خصم/تخفيض, عرض, مجانًا/مجاني, توفير/وفر, صفقة, إكسبيري, تسوق الآن, توصيل مجاني, مخزون محدود, تنزيلات, عروض حصرية, تخفيضات مفتوحة, إتمام شراء, تنزيلات نهاية العام, عروض جديدة, أفضل تغطية, خصومات تصل حتى, جديد الوصول, عروض رائعة, روابط تابعة, أخبار التوصيل, تركيبات معينة مجانية, بدء التسوق, يمكنك أيضًا, تفاصيل العرض, تفاصيل الكوبون, المزيد من الخصومات, المزيد من الإكسسوارات, آخر فرصة, أحدث التنزيلات, الخصم الخاص بك, تفاصيل الطلب, أكبر تخفيضات, خصومات لفترة محدودة, تعرف على المزيد, خصومات موسمية, فرصة لا تعوض, المساعدة والدعم, رقم التتبع, تلقائيًا بالسلة, عروض الإعلانات الجديدة, عروض الاشتراك, خصومات مدروسة, عروضي الشهرية, مجموعة مختارة, توفير المال, سوبر خصومات, برامج الولاء, تخفيضات أسبوعية, مبيعات الموسم, الحصول على أفضل العروض, خصومات الوقت المحدود, عروض شحن جديدة, كوبونات الهدايا, خصومات 24 ساعة, الاشتراك في النشرة الإخبارية, تخفيضات العطلات, عروض الموسم الجديد, خصم العضوية, عروض ترويجية, توصيل فوري, برنامج الابتسامة, خصم على طلبك, كوبونات مجانية, تسوق أكثر, خصومات شهرية, توفير فائق, خصومات العودة للمدارس, عروض سريعة, مجموعة متنوعة, شحن مجاني, عروض منتجات بطاقات الهدايا, خصومات لفترة محدودة فقط, عروض الفنادق, تخفيضات جديدة, خصومات الماركات, تخفيضات تموز, خصم 10%, تفاصيل العملية, توفير كبير, عروض شراء متعددة, تخفيضات عطلة نهاية الأسبوع, عروض وخصومات, خصومات على منتجات مختارة, عروض شهر مايو, الحصول على المزيد مع أقل, كوبون شحن مجاني, تخفيضات في آب, تخفيضات الهدية, العروض الجوية, كوبون التسوق, خصم خاص, عروض الفنادق الحصرية, تسوق في المنزل, خصومات منتجات الموسم, عروض الألعاب, تخفيضات لساعات محدودة, الشحن في اليوم التالي, خصومات بمناسبة العطلات , كواد ، اكواد خصم ، خصم ، خصومات ، كوبونات خصم ، كوبون خصم ، كوبون ، كوبونات ، خصومات المتاجر ، عروض ، عروض و خصومات ، بوابة الخصومات ، وفر ، موقع الموفر ، promo code , code , أكواد ، خصم حصري"
        />
      </Helmet>

      <Banner data={banner} deleteBanner={deleteBanner} role={role} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          padding: { xs: "40px 30px", md: "40px 60px" },
          gap: { xs: "30px", md: "0px" },
        }}
      >
        <Dropdown handleClick={handleClick} />
        <SearchBar setSearchInput={setSearchInput} />
        <Typography variant="h1" sx={{ fontSize: { xs: "30px", md: "40px" } }}>
          الموضوع اسهل ماتتوقع
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
          gap: { xs: "10px", md: "30px" },
          padding: { xs: "40px 10px", md: "40px 60px" },
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
      <Services />
    </Stack>
  );
}
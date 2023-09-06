import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import "./updatecoupon.css";
import AddDropdown, { Country } from "../../components/AddDropdown/AddDropdown";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { loginFailure } from "../../redux/user";
import axiosInstance from "../../axiosInstance.js";
import { Helmet } from "react-helmet";

export default function UpdateCoupon() {
  const [img, setImg] = useState();
  const onInputChange = (e) => {
    setImg(e.target.files[0]);
  };
  const [country, setCountry] = useState();
 const {id}=useParams()
  const dispatch = useDispatch();
  const handleCont = (value) => {
    setCountry(value);
  };

  const navigate = useNavigate();
  const [coupon, setCoupon] = React.useState({
    companyName: "",
    discount: "",
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
      console.log(coupon.companyName);
      const data={}

if (coupon.companyName) {
  formData.append("companyName", coupon.companyName);
  data["companyName"] = coupon.companyName;
}
if (coupon.discount) {
  formData.append("discount", coupon.discount);
  data['discount']=coupon.discount
}
if (coupon.couponCode) {
  formData.append("couponCode", coupon.couponCode);
  data['couponCode']  = coupon.couponCode ;
}
if (coupon.siteLink) {
  formData.append("siteLink", coupon.siteLink);
  data ['siteLink' ]=coupon.siteLink
}
if (country!=[]&&country) {
  formData.append("country", country);
  data ["country"]=country

}
      const res = await axiosInstance.patch(
        `update/${id}`,data,
        {
          withCredentials: true,
        }
      );

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
            <AddDropdown handleCont={handleCont} />

            <Typography sx={{ marginLeft: "15px" }}>البلد</Typography>
          </Box>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input className="file" type="file" onChange={onInputChange} />
          <Typography sx={{ marginLeft: "15px" }}>logo</Typography>
        </Box> */}
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

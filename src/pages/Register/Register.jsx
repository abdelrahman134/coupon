import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loginFailure, loginStart, loginSuccess } from "../../redux/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Dialog } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import axiosInstance from "../../axiosInstance";
import { Helmet } from "react-helmet";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
      const dispatch = useDispatch();
      const navigate = useNavigate();
    const [user, setUser] = React.useState({
      name: "",
      phoneNumber: "",
      storeName: "",
      storeLink: "",
      code: "",
      discount: "",
      email: "",
    });
    const handleChange=(e)=>{
        setUser(prev=>({...prev,[e.target.name]:e.target.value}))
    }

   const handleLogin = async (e) => {
     e.preventDefault();
     try {
       const res = await axiosInstance.post("addCoupon", 
       user, { withCredentials: true }
       );
       navigate("/");
     } catch (err) {
       dispatch(loginFailure());
     }
   };


    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <title>Easy Code</title>
        <link rel="icon" href="%PUBLIC_URL%/fav.ico" />

        <meta
          name="description"
          content="ايزي كود هو أهم وأفضل كوبونات خصم لجميع المواقع والمتاجر العربية ويقوم بجمع آلاف الاكواد وكوبونات الخصم بإستخدام الذكاء الاصطناعي 2023"
        />
        <meta
          name="keywords"
          content="كوبون/كود, خصم/تخفيض, عرض, مجانًا/مجاني, توفير/وفر, صفقة, إكسبيري, تسوق الآن, توصيل مجاني, مخزون محدود, تنزيلات, عروض حصرية, تخفيضات مفتوحة, إتمام شراء, تنزيلات نهاية العام, عروض جديدة, أفضل تغطية, خصومات تصل حتى, جديد الوصول, عروض رائعة, روابط تابعة, أخبار التوصيل, تركيبات معينة مجانية, بدء التسوق, يمكنك أيضًا, تفاصيل العرض, تفاصيل الكوبون, المزيد من الخصومات, المزيد من الإكسسوارات, آخر فرصة, أحدث التنزيلات, الخصم الخاص بك, تفاصيل الطلب, أكبر تخفيضات, خصومات لفترة محدودة, تعرف على المزيد, خصومات موسمية, فرصة لا تعوض, المساعدة والدعم, رقم التتبع, تلقائيًا بالسلة, عروض الإعلانات الجديدة, عروض الاشتراك, خصومات مدروسة, عروضي الشهرية, مجموعة مختارة, توفير المال, سوبر خصومات, برامج الولاء, تخفيضات أسبوعية, مبيعات الموسم, الحصول على أفضل العروض, خصومات الوقت المحدود, عروض شحن جديدة, كوبونات الهدايا, خصومات 24 ساعة, الاشتراك في النشرة الإخبارية, تخفيضات العطلات, عروض الموسم الجديد, خصم العضوية, عروض ترويجية, توصيل فوري, برنامج الابتسامة, خصم على طلبك, كوبونات مجانية, تسوق أكثر, خصومات شهرية, توفير فائق, خصومات العودة للمدارس, عروض سريعة, مجموعة متنوعة, شحن مجاني, عروض منتجات بطاقات الهدايا, خصومات لفترة محدودة فقط, عروض الفنادق, تخفيضات جديدة, خصومات الماركات, تخفيضات تموز, خصم 10%, تفاصيل العملية, توفير كبير, عروض شراء متعددة, تخفيضات عطلة نهاية الأسبوع, عروض وخصومات, خصومات على منتجات مختارة, عروض شهر مايو, الحصول على المزيد مع أقل, كوبون شحن مجاني, تخفيضات في آب, تخفيضات الهدية, العروض الجوية, كوبون التسوق, خصم خاص, عروض الفنادق الحصرية, تسوق في المنزل, خصومات منتجات الموسم, عروض الألعاب, تخفيضات لساعات محدودة, الشحن في اليوم التالي, خصومات بمناسبة العطلات , كواد ، اكواد خصم ، خصم ، خصومات ، كوبونات خصم ، كوبون خصم ، كوبون ، كوبونات ، خصومات المتاجر ، عروض ، عروض و خصومات ، بوابة الخصومات ، وفر ، موقع الموفر ، promo code , code , أكواد ، خصم حصري"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo19.png" />
      </Helmet>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <EditIcon />
          </Avatar>
          <Typography component="h1" variant="h5" dir="rtl">
            ادخال كوبونك
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  required
                  fullWidth
                  id="firstName"
                  label="الأسم"
                  dir="rtl"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Lastname"
                  onChange={(e) => handleChange(e)}
                  label="رقم الجوال"
                  name="phoneNumber"
                  dir="rtl"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  onChange={(e) => handleChange(e)}
                  label="الأيميل"
                  name="email"
                  dir="rtl"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  dir="rtl"
                  name="storeName"
                  onChange={(e) => handleChange(e)}
                  label="اسم المتجر"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  dir="rtl"
                  name="storeLink"
                  onChange={(e) => handleChange(e)}
                  label="رابط المتجر"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  dir="rtl"
                  name="code"
                  onChange={(e) => handleChange(e)}
                  label="رمز الكود"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  dir="rtl"
                  name="discount"
                  onChange={(e) => handleChange(e)}
                  label="نسبه الخصم للعميل"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              ارسال الكود{" "}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" dir="rtl">
                  *العمولة تتحدد بعد قبول الكود
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

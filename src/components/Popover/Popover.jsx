import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Helmet } from "react-helmet-async";
import like1 from "../../assets/12.png";
import dislike1 from "../../assets/32.png";
import "./Popover.css";
import axiosInstance from "../../axiosInstance";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Popover({ item, id }) {
  const [open, setOpen] = React.useState(false);
  const [like, setLike] = React.useState(item.like);
  const [dislike, setdisLike] = React.useState(item.dislike);
 

 const handleClickOpen = () => {
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };

 const updatelike =async () => {
   try {
     setLike((prev) => prev + 1);

     await axiosInstance.patch(
       `updatelike/${id}`,
       { like: like + 1 },
       {
         withCredentials: true,
       }
     );
   } catch (e) {
     console.log(e);
   }
 };

 const updatedislike =async () => {
   try {
     setdisLike((prev) => prev + 1);

     await axiosInstance.patch(
       `updatelike/${id}`,
       { dislike: dislike + 1 },
       {
         withCredentials: true,
       }
     );
   } catch (e) {
     console.log(e);
   }
 };
  const [copyText, setCopyText] = React.useState(item.couponCode);
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
  };
  const title1 = `اقوي كوبون خصومات - ${item.companyName} اقوي كود خصم  `;
  const description = ` ${item.discount} اكبر كود خصم في 2023 من موقع   ${item?.companyName}  خصومات حتي  `;
  return (
    <div>
      {open && (
        <Helmet>
          <title>{title1}</title>

          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="كوبون/كود, خصم/تخفيض, عرض, مجانًا/مجاني, توفير/وفر, صفقة, إكسبيري, تسوق الآن, توصيل مجاني, مخزون محدود, تنزيلات, عروض حصرية, تخفيضات مفتوحة, إتمام شراء, تنزيلات نهاية العام, عروض جديدة, أفضل تغطية, خصومات تصل حتى, جديد الوصول, عروض رائعة, روابط تابعة, أخبار التوصيل, تركيبات معينة مجانية, بدء التسوق, يمكنك أيضًا, تفاصيل العرض, تفاصيل الكوبون, المزيد من الخصومات, المزيد من الإكسسوارات, آخر فرصة, أحدث التنزيلات, الخصم الخاص بك, تفاصيل الطلب, أكبر تخفيضات, خصومات لفترة محدودة, تعرف على المزيد, خصومات موسمية, فرصة لا تعوض, المساعدة والدعم, رقم التتبع, تلقائيًا بالسلة, عروض الإعلانات الجديدة, عروض الاشتراك, خصومات مدروسة, عروضي الشهرية, مجموعة مختارة, توفير المال, سوبر خصومات, برامج الولاء, تخفيضات أسبوعية, مبيعات الموسم, الحصول على أفضل العروض, خصومات الوقت المحدود, عروض شحن جديدة, كوبونات الهدايا, خصومات 24 ساعة, الاشتراك في النشرة الإخبارية, تخفيضات العطلات, عروض الموسم الجديد, خصم العضوية, عروض ترويجية, توصيل فوري, برنامج الابتسامة, خصم على طلبك, كوبونات مجانية, تسوق أكثر, خصومات شهرية, توفير فائق, خصومات العودة للمدارس, عروض سريعة, مجموعة متنوعة, شحن مجاني, عروض منتجات بطاقات الهدايا, خصومات لفترة محدودة فقط, عروض الفنادق, تخفيضات جديدة, خصومات الماركات, تخفيضات تموز, خصم 10%, تفاصيل العملية, توفير كبير, عروض شراء متعددة, تخفيضات عطلة نهاية الأسبوع, عروض وخصومات, خصومات على منتجات مختارة, عروض شهر مايو, الحصول على المزيد مع أقل, كوبون شحن مجاني, تخفيضات في آب, تخفيضات الهدية, العروض الجوية, كوبون التسوق, خصم خاص, عروض الفنادق الحصرية, تسوق في المنزل, خصومات منتجات الموسم, عروض الألعاب, تخفيضات لساعات محدودة, الشحن في اليوم التالي, خصومات بمناسبة العطلات , كواد ، اكواد خصم ، خصم ، خصومات ، كوبونات خصم ، كوبون خصم ، كوبون ، كوبونات ، خصومات المتاجر ، عروض ، عروض و خصومات ، بوابة الخصومات ، وفر ، موقع الموفر ، promo code , code , أكواد ، خصم حصري"
          />
        </Helmet>
      )}

      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "rgb(102,45,145,1)",
          color: "white",
          width: "100%",
          marginTop: { xs: "0px", md: "10px" },
          padding: { xs: "0px" },
        }}
      >
        احصل على الخصم
      </Button>
      <a href={item.siteLink}  target="_blank" rel="noreferrer">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(102,45,145,1)",
            color: "white",
            width: "100%",
            marginTop: { xs: "4px", md: "10px" },
            padding: { xs: "0px" },
          }}
        >
          زيارة الموقع
        </Button>
      </a>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box
          sx={{
            minWidth: { xs: "300px", md: "400px" },
            borderRadius: "10px",
            padding: { xs: "10px 0 ", md: "15px 0 " },
          }}
        >
          <DialogTitle
            id="responsive-dialog-title"
            sx={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                cursor: "pointer",
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </Box>
            <LazyLoadImage
              className="imgd"
              src={`https://api.easycodesa.com/uploads/${item.img}`}
              alt="pic"
            />
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "20px", maxWidth: "300px", textAlign: "center" }}
            >
              {item.discount} خصم
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {" "}
              <Typography
                sx={{ fontWeight: "bold", fontSize: "25px" }}
                className="con"
                dir="rtl"
              >
                الدولة:{" "}
              </Typography>
              {Array.isArray(item.country)
                ? item?.country?.join(" , ")
                : item.country}
            </Typography>

            <Box sx={{ display: "flex", gap: "20px" }}>
              <Typography
                sx={{
                  backgroundColor: "lightgreen",
                  width: "150px",
                  textAlign: "center",
                  border: "3px dotted green",
                  padding: "5px 0",
                }}
              >
                {item.couponCode}
              </Typography>
              <Typography variant="h1" sx={{ fontSize: "25px" }}>
                كوبون
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                color: "rgb(25 118 210)",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <LazyLoadImage
                  alt="pic"
                  src={dislike1}
                  className="iconpop"
                  onClick={updatelike}
                />

                <Typography
                  className="counter"
                  sx={{ fontSize: "20px", color: "black" }}
                >
                  {like}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <LazyLoadImage
                  alt="pic"
                  src={like1}
                  className="iconpop"
                  onClick={updatedislike}
                />

                <Typography sx={{ fontSize: "20px", color: "black" }}>
                  {dislike}
                </Typography>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              variant="contained"
              sx={{
                width: "80%",
                margin: "0 auto",
                backgroundColor: "rgb(102,45,145,1)",
              }}
              onClick={handleCopy}
            >
              نسخ الكوبون
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

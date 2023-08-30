import { Box, Typography } from '@mui/material';
import React from 'react'
import SecurityIcon from "@mui/icons-material/Security";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
export default function Services() {
  return (
    <Box
      sx={{
        padding: { xs: "40px 30px", md: "40px 10px" },
        textAlign: "center",
      }}
    >
      <Typography variant="h2"> خدماتنا</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            marginTop: "20px",
            fontSize: "18px",
            width: { xs: "100%", md: "60%" },
            margin: "20px auto",
          }}
        >
          نحن في ايزي كود نوفر اكواد خصم لعديد من المتاجر المشاركة معنا، ونحن
          نولي أهمية كبيرة لحماية خصوصية العملاء والزائرين لموقعنا. ونحن نضمن
          عدم استخدام أي معلومات شخصية للعملاء أو الزائرين ولا نطلب أي معلومات
          شخصية منهم أبدًا.{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              border: "1px solid #662d90",
              borderRadius: "10px",
            }}
          >
            <SecurityIcon sx={{ fontSize: "50px", color: "#662d90" }} />
            <Typography sx={{ fontSize: "20px", width: "250px" }}>
              لا نطلب أي معلومات شخصية من العملاء أو الزائرين لموقعنا. ولا
              نستخدم أي معلومات شخصية ولا نقدمها لأي طرف ثالث.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              border: "1px solid #662d90",
              borderRadius: "10px",
            }}
          >
            <LocalOfferIcon sx={{ fontSize: "50px", color: "#662d90" }} />
            <Typography sx={{ fontSize: "20px", width: "250px" }}>
              نحن نقدم أكواد الخصم لعديد من المتاجر المشاركة معنا، وقد نتلقى
              بيانات زيارات العملاء والزائرين لتلك المتاجر،            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              border: "1px solid #662d90",
              borderRadius: "10px",
            }}
          >
            <NoAccountsIcon sx={{ fontSize: "50px", color: "#662d90" }} />
            <Typography sx={{ fontSize: "20px", width: "250px" }}>
              نحن نعمل بشكل صريح وشفاف، ونضمن أنه لن يتم استخدام أي معلومات
              شخصية للعملاء أو الزائرين، ولن يتم تقديمها لأي طرف ثالث.{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              border: "1px solid #662d90",
              borderRadius: "10px",
            }}
          >
            <CloudDoneOutlinedIcon sx={{ fontSize: "50px", color: "#662d90" }} />
            <Typography sx={{ fontSize: "20px", width: "250px" }}>
              قد يتم تحديث سياسة الخصوصية بشكل دوري، وسنعمل على إعلام عملائنا
              والزائرين لموقعنا في حالة حدوث ذلك.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

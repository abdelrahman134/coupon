import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import none from "../../assets/فامكير.svg";
import "./Card.css";
import { Box,} from "@mui/material";
import Popover from "../Popover/Popover"
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
export default function Cards({item,role,id,deleteFun,setLike}) {
  const [openPopup, setOpenPopup] = useState(false);

  const handleClick=()=>{
  deleteFun(id)
}

  return (
    <Card>
      <CardContent
        sx={{
          width: { xs: "210px", md: "250px" },

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {(role || "emp") == "Admin" ? (
          <div id={id} onClick={handleClick}>
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
              <DeleteIcon />
            </Box>
          </div>
        ) : (
          ""
        )}
        {(role || "emp") == "Admin" ? (
          <Link to={`/update/${id}`}>
            <Box
              sx={{
                position: "absolute",
                top: "5px",
                left: "5px",
                cursor: "pointer",
                color: "green",
                fontSize: "30px",
              }}
            >
              <EditIcon />
            </Box>
          </Link>
        ) : (
          ""
        )}

        <img
          className="cardimg"
          src={`https://api.easycodesa.com/uploads/${item.img} `}
          alt=""
        />
        <Typography
          gutterBottom
          variant="h1"
          sx={{ fontSize: { xs: "25px", md: "30px" }, fontWeight: "bold" }}
        >
          {item.companyName}
        </Typography>

        <Typography
          gutterBottom
          variant="h1"
          sx={{ fontSize: "16px", height: "50px" }}
          dir="rtl"
        >
          {item.discount} خصم
        </Typography>

        <Popover
          open={openPopup}
          item={item}
          img={none}
          id={id}
          setLike={setLike}
        />
      </CardContent>
    </Card>
  );
}

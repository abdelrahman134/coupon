import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import none from "../../assets/فامكير.svg";
import "./Card.css";
import { Box,} from "@mui/material";
import Popover from "../Popover/Popover"
import DeleteIcon from "@mui/icons-material/Delete";
export default function Cards({item,role,id,deleteFun}) {
  const [openPopup, setOpenPopup] = useState(false);
  
const handleClick=()=>{
  deleteFun(id)
}

  return (
    <Card>
      <CardContent
        sx={{
          width: "250px",
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
        <img
          className="cardimg"
          src={`https://api.easycodesa.com/uploads/${item.img} `}
          alt=""
        />
        <Typography gutterBottom variant="h1" sx={{ fontSize: "20px" }}>
          {item.companyName}
        </Typography>

        <Typography gutterBottom variant="h1" sx={{ fontSize: "20px" }}>
          {item.discount} خصم
        </Typography>

        <Popover open={openPopup} item={item} img={none} />
      </CardContent>
    </Card>
  );
}

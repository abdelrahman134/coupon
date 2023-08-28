// import React from "react";
// import {
//   AppBar,
//   Avatar,
//   Badge,
//   Box,
//   Button,
//   FormControl,
//   InputBase,
//   Menu,
//   MenuItem,
//   Select,
//   styled,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import logo from "../../assets/logo.png";
// import "./navbar.css";
// import SearchBar from "../SearchBar/SearchBar";
// import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
// import Dropdown from "../Dropdown/Dropdown";
// export default function Navbar() {
//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         backgroundColor: "white",
//         height: "80px",
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "20px 40px",
//       }}
//     >
//       <Box>
//         <img src={logo} alt="" />
//       </Box>

//       <SearchBar />
//       <Box sx={{ color: "black", display: "flex", gap: "10px" }}>
//         <Button sx={{ color: "black" }}>جميع المتاجر</Button>
//         <Button sx={{ color: "black" }}>عروض اليوم</Button>
//         <Dropdown/>
//       </Box>
//     </AppBar>
//   );
// }
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import "./navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import tel from "../../assets/2.png";
import wh from "../../assets/3.png";

const drawerWidth = 240;
const navItems = [
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      justifyContent: "flex-end",
      fontSize: "20px",
    }}
  >
    <a
      className="icons"
      href="https://api.whatsapp.com/message/DG5NAZFB7N5GN1?autoload=1&app_absent=0"
    >
      <img className="navs" src={wh} alt="" />
    </a>
  </Box>,

  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      justifyContent: "flex-end",
    }}
  >
    {/* <Typography sx={{ fontWeight: "400", fontSize: "20px" }}>
  تلقرلم بوت        </Typography> */}

    <a className="icons" href="https://t.me/EasyCodesa_bot">
      {" "}
      <img className="navs" src={tel} alt="" />
    </a>
  </Box>,
  <Link to="/login" >
    
      تسجيل الدخول
  </Link>,
  "جميع المتاجر",
  "عروض اليوم",
];
const navItemsmall = [
  "جميع المتاجر",
  "عروض اليوم",
  
  <Link to="/login">تسجيل الدخول</Link>,
  <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "flex-end",
        fontSize: "20px",
      }}
    >
      <a
        className="icons"
        href="https://api.whatsapp.com/message/DG5NAZFB7N5GN1?autoload=1&app_absent=0"
      >
        <img className="navs" src={wh} alt="" />
      </a>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "flex-end",
      }}
    >
      {/* <Typography sx={{ fontWeight: "400", fontSize: "20px" }}>
  تلقرلم بوت        </Typography> */}

      <a className="icons" href="https://t.me/EasyCodesa_bot">
        {" "}
        <img className="navs" src={tel} alt="" />
      </a>
    </Box>
  </Box>,
];
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} alt="" />
      <Divider />
      <List>
        {navItemsmall.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "right" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "white",
          padding: { xs: "0px", md: "0px 40px" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="rgb(102,45,145,1)"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className="imn">
            <img src={logo} alt="" />
          </Link>
          <SearchBar sx={{ display: { xs: "none", sm: "block" } }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "black" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

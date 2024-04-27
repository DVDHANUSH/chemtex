import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import companyLogo from "../../assets/svc.png";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "../../assets/action.js";
import "../Lading_Page.js/LandingPageNav.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider, Container, styled, Paper, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Products", "Pricing", "Blog"];
const drawerWidth = 240;
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const navItems = ["Home", "About", "Contact"];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#FF4A4A" : "#FF4A4A",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function LandingPage(props) {
  const { window } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [isActive, setIsActive] = React.useState(true);
  const [isMobileView, setIsMobileView] = React.useState(false);

  // React.useEffect(() => {
  //   const handleResize = () => {
  //     if (typeof window !== "undefined") {
  //       // Check if window is available
  //       setIsMobileView(window.innerWidth <= 768); // Assuming 768px is the breakpoint for mobile view
  //     }
  //   };
  //   // Initial check
  //   handleResize();

  //   // Add resize event listener
  //   if (typeof window !== "undefined") {
  //     // Check if window is available
  //     window.addEventListener("resize", handleResize);

  //     // Cleanup
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }
  // }, []);
  // const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    if (isActive) {
      // If isActive is true, display the .item elements
      document.querySelectorAll(".item").forEach((item) => {
        item.style.display = "block";
      });
    } else {
      // If isActive is false, hide the .item elements
      document.querySelectorAll(".item").forEach((item) => {
        item.style.display = "none";
      });
    }
  }, [isActive]);

  // const handleToggleClick = () => {
  //   setIsActive(!isActive);
  // };
  const handleToggleClick = () => {
    if (isMobileView) {
      setMobileOpen(!mobileOpen);
    } else {
      setIsActive(!isActive);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
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
    <div>
      <nav>
        <ul className="menu">
          <li className="logo">
            <a href="#">Chemtex</a>
          </li>
          <li className="item">
            <a href="#">Home</a>
          </li>
          <li className="item">
            <a href="#">About</a>
          </li>
          <li className="item">
            <a href="#">Services</a>
          </li>
          <li className="item button">
            <a href="#">Login</a>
          </li>
          <li className="item button secondary">
            <a href="#">Signup</a>
          </li>
          <li className="toggle" onClick={handleToggleClick}>
            <span className="bars"></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default LandingPage;
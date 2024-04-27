import {
  AppBar,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Logout } from "@mui/icons-material";
import { Help } from "@mui/icons-material";
import settings from "../../assets/settings.png";
import user from "../../assets/user.png";
import SearchNavbar from "./SearchNavbar";
import DrawerComponent from "./DrawerComponent";
import { AccountCircle } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../NavBar.css";
import { useNavigate } from "react-router-dom";

function DropdownItem(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("UserObj");
    localStorage.removeItem("received_name");
    navigate("/homepage");
    window.location.reload();
  };
  const handleClick = () => {
    if (props.text === "Logout") {
      handleLogout();
    } else if (props.text !== "") {
      if (localStorage.getItem("role") === "admin") {
        navigate(`/admin/${props.text}`);
        window.location.reload();
      } else {
        navigate(`/user/${props.text}`);
        window.location.reload();
      }
    }
  };
  return (
    <div>
      <li onClick={handleClick} className="dropdownItem">
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    </div>
  );
}
function NavBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  let menuRef = React.useRef();
  React.useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target) && e.target !== menuRef.current) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const [open, setOpen] = React.useState(false);
  console.log(theme);
  const [value, setValue] = useState();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const name = localStorage.getItem("received_name");

  const handleAddToWishlist = () => {
    console.log("Added to wishlist");
    navigate("/wishlist");
  };
  const pages = ["Products", "Services", "AbboutUs", "ContactUs"];
  console.log(isMatch);
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <AppBar sx={{ background: "#F1C4A4", zIndex: "9999" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>ChemTex</Typography>
              <DrawerComponent></DrawerComponent>
            </>
          ) : (
            <>
              <Typography>ChemTex</Typography>
              {/* <Button variant="contained">Login</Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                Signup
              </Button> */}
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                // sx={{ marginLeft: "auto" }}
                sx={{
                  marginLeft: "auto",
                  "& .MuiTab-root:hover": {
                    color: "white", // Change text color on hover
                    backgroundColor: "#9999", // Change background color on hover
                  },
                  "& .MuiTab-root.Mui-selected": {},
                }}
              >
                {pages.map((page, index) => (
                  <Tab sx={{ fontSize: "12px" }} key={index} label={page}></Tab>
                ))}
              </Tabs>
            </>
          )}
          <Stack direction="row" alignItems="center">
            <Tooltip title="Favorite Stock">
              <IconButton
                style={{ color: "red" }}
                onClick={handleAddToWishlist}
              >
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <div
              className="menu-container"
              ref={menuRef}
              style={{ color: "black" }}
            >
              <div
                className="menu-trigger"
                onClick={() => {
                  setOpen(!open);
                  console.log("hii");
                }}
              >
                <Tooltip title="Your Profile">
                  <IconButton sx={{ color: "red" }}>
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
              </div>
              <div className={`dropdown-menu ${open ? "active" : "active"}`}>
                <h3>
                  {name}
                  <br />
                </h3>
                {localStorage.getItem("UserObj") !== null ? (
                  localStorage.getItem("role") === "admin" ? (
                    <ul>
                      <DropdownItem img={user} text={"Profile"} />
                      <DropdownItem img={settings} text={"Add Item"} />
                      <DropdownItem img={user} text={"Inventory sync"} />
                      <DropdownItem img={Help} text={"Upload Images"} />
                      <DropdownItem img={Logout} text={"Logout"} />
                    </ul>
                  ) : (
                    <ul>
                      <DropdownItem img={user} text={"Profile"} />
                      <DropdownItem img={settings} text={"Orders"} />
                      <DropdownItem img={Help} text={"Addresses"} />
                      <DropdownItem img={Logout} text={"Logout"} />
                    </ul>
                  )
                ) : (
                  <p>login /signup</p>
                )}
              </div>
            </div>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

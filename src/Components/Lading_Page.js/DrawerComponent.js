import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
function DrawerComponent() {
  const pages = ["Products", "Services", "AbboutUs", "ContactUs"];

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{
          color: "white",
          position: "absolute",
          top: "12px",
          right: "15px",
        }}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </div>
  );
}
export default DrawerComponent;

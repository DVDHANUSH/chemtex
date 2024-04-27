import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./NavBar";
function Layout() {
  return (
    <div>
      <>
        <NavBar />
        <Box paddingTop={9}>
          <Outlet />
        </Box>
      </>
    </div>
  );
}
export default Layout;

import Stack from "@mui/material/Stack";
import React from "react";
import fosroc_logo from "../assets/fosroc.png";
import "./Stack_images.css";
import "./Fosroc.css";
import waterleak from "../assets/waterleak.jpg";
import grouts from "../assets/grouts.jpg";
import adhesives from "../assets/adhesives.jpeg";
import sealants from "../assets/sealant.jpg";
import { Container } from "react-bootstrap";

import { Typography } from "@mui/material";
function Stack_images() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={27}
        border="1px solid black"
        sx={{ boxSizing: "border-box" }}
      >
        <Stack
          direction="column"
          spacing={1}
          alignItems="center"
          sx={{ boxSizing: "border-box" }}
        >
          <img src={waterleak} className="wl" alt="waterleak image1" />
          <Typography variant="caption"> Its a afdafdsf</Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={1}
          alignItems="center"
          sx={{ boxSizing: "border-box" }}
        >
          <img src={waterleak} className="wl" alt="waterleak image2" />
          <Typography variant="caption"> Its a afdafdsf</Typography>
        </Stack>

        <Stack
          direction="column"
          spacing={1}
          alignItems="center"
          sx={{ boxSizing: "border-box" }}
        >
          <img src={waterleak} className="wl" alt="waterleak image1" />
          <Typography variant="caption"> Its a afdafdsf</Typography>
        </Stack>
      </Stack>
    </div>
  );
}
export default Stack_images;

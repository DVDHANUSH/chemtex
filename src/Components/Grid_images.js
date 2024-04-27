import React from "react";
import fosroc_logo from "../assets/fosroc.png";
import Grid from "@mui/material/Grid";
import "./Stack_images.css";
import "./Grid_images.css";
import waterleak from "../assets/waterleak.jpg";
import grouts from "../assets/grouts.jpg";
import adhesives from "../assets/adhesives.jpeg";
import sealants from "../assets/sealant.jpg";
import Stack from "@mui/material/Stack";
import { Padding } from "@mui/icons-material";
function Grid_images() {
  return (
    <Grid container item style={{ padding: "35px" }}>
      <Grid item md={4} xs={4}>
        <Stack>
          <img src={waterleak} className="wl" alt="waterleak image1" />
          <center>
            <h1 className="waterproofing_text">Waterproofing</h1>
          </center>
        </Stack>
      </Grid>
      <Grid item md={4}></Grid>
      <Grid item md={4}>
        <Stack>
          <img src={grouts} className="g" alt="waterleak image1" />
          <center>
            <h1 className="grouts_text">Grouting</h1>
          </center>
        </Stack>
      </Grid>
      <Grid item md={4} xs={4}></Grid>
      <Grid item md={4}>
        <img src={fosroc_logo} className="fosroc_Logo" alt="waterleak image1" />
      </Grid>
      <Grid item md={4}></Grid>
      <Grid item md={4}>
        <Stack>
          <img src={adhesives} alt="" className="adhesives" />
          <center>
            <h1 className="adhesives_text">Adhesives</h1>
          </center>
        </Stack>
      </Grid>
      <Grid item md={4}></Grid>
      <Grid item md={4}>
        <Stack>
          <img src={sealants} alt="" className="sealant" />
          <center>
            <h1 className="sealents_text">Sealants</h1>
          </center>
        </Stack>
      </Grid>
    </Grid>
  );
}
export default Grid_images;

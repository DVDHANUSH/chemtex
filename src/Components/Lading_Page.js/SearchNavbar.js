import {
  AppBar,
  FormControl,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Toolbar,
} from "@mui/material";
import List from "@mui/material/List";
import React, { useState } from "react";
import "./SearchNavBar.css";
function SearchNavbar() {
  return (
    <div>
      <AppBar
        sx={{
          background: "#FF9E9E",
          position: "absolute",
          "@media (max-width: 1181px)": {
            top: "4%",
            "& .dropdown-menu": {
              maxHeight: "1180px", // Adjust the value as needed
            },
          },
          // "@media ( max-width: 540px)": {
          //   top: "7%", // Adjust as needed for smaller screens
          //   "& .dropdown-menu": {
          //     maxHeight: "900px", // Adjust the value as needed
          //   },
          // },
          // "@media ( max-width: 345px)": {
          //   top: "6%", // Adjust as needed for smaller screens
          //   "& .dropdown-menu": {
          //     maxHeight: "900px", // Adjust the value as needed
          //   },
          // },
          // "@media (max-width: 600px)": {
          //   top: "6%", // Adjust as needed for smaller screens
          //   "& .dropdown-menu": {
          //     maxHeight: "900px", // Adjust the value as needed
          //   },
          // },
          // "@media (max-width: 365px)": {
          //   top: "7%", // Adjust as needed for smaller screens
          //   "& .dropdown-menu": {
          //     maxHeight: "900px", // Adjust the value as needed
          //   },
          // },
          // "@media (min-width: 819px) and (max-width: 821px)": {
          //   top: "9%", // Adjust as needed for smaller screens
          //   ".dropdown-menu": {
          //     maxHeight: "1259px",
          //   },
          // },
          "@media (max-width: 345px)": {
            top: "6%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "900px", // Adjust the value as needed
            },
          },
          "@media (min-width: 411px) and (max-width: 415px)": {
            top: "6%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "900px", // Adjust the value as needed
            },
          },
          "@media (min-width: 346px) and (max-width: 376px)": {
            top: "6%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "900px", // Adjust the value as needed
            },
          },
          "@media (min-width: 377px) and (max-width: 389px)": {
            top: "6%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "900px", // Adjust the value as needed
            },
          },
          "@media (min-width: 389px) and (max-width: 391px)": {
            top: "6%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "900px", // Adjust the value as needed
            },
          },

          "@media (min-width: 393px) and (max-width: 516px)": {
            top: "6%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "900px", // Adjust the value as needed
            },
          },

          "@media (min-width: 516px) and (max-width: 900px)": {
            top: "6%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "900px", // Adjust the value as needed
            },
          },
          "@media (min-width: 900px) and (max-width: 1000px)": {
            top: "6%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "1000px", // Adjust the value as needed
            },
          },
          "@media (min-width: 1000px) and (max-width: 1400px)": {
            top: "6%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "900px", // Adjust the value as needed
            },
          },
          // "@media (max-width: 768px)": {
          //   top: "6%", // Adjust as needed for smaller screens
          //   "& .dropdown-menu": {
          //     maxHeight: "1100px", // Adjust the value as needed
          //   },
          // },
          // "@media (min-width:821px && max-width: 825px)": {
          //   top: "5%", // Adjust as needed for smaller screens
          //   "& .dropdown-menu": {
          //     maxHeight: "1185px", // Adjust the value as needed
          //   },
          // },
          // "@media max-width: 825px": {
          //   top: "5%", // Adjust as needed for smaller screens
          //   "& .dropdown-menu": {
          //     maxHeight: "1185px", // Adjust the value as needed
          //   },
          // },
          "@media (min-width: 1021px) and (max-width: 1024px)": {
            top: "9%", // Adjust as needed for smaller screens
            ".dropdown-menu": {
              maxHeight: "1400px", // Adjust the value as needed
            },
          },
        }}
      >
        <Toolbar>
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <Paper
              class="dropdown-menu"
              elevation={0}
              style={{
                top: "25px",
                height: "950%",
                width: "122px",
                right: "-19%",
              }}
            >
              <ul>
                <li>
                  <div class="dropdown">
                    <button className="dropdown-button">Item 1</button>
                    <Paper
                      class="dropdown-menu"
                      elevation={0}
                      style={{
                        top: "-45px",
                        height: "950%",
                        width: "122px",
                        right: "-152%",
                        transform: "rotate(-90deg)",
                        // backgroundColor: "#9999",
                      }}
                    ></Paper>
                  </div>
                </li>
                <li>
                  <div class="dropdown">
                    <button className="dropdown-button">Item 2</button>
                    <Paper
                      class="dropdown-menu"
                      elevation={0}
                      style={{
                        top: "-35px",
                        height: "950%",
                        width: "122px",
                        right: "-152%",
                        transform: "rotate(-90deg)",
                        // backgroundColor: "#9999",
                      }}
                    ></Paper>
                  </div>
                </li>
                <li>
                  <div class="dropdown">
                    <button className="dropdown-button">Item 3</button>
                    <Paper
                      class="dropdown-menu"
                      elevation={0}
                      style={{
                        top: "-35px",
                        height: "950%",
                        width: "122px",
                        right: "-152%",
                        // backgroundColor: "#9999",
                        transform: "rotate(-90deg)",
                      }}
                    ></Paper>
                  </div>
                </li>
                <li>
                  <div class="dropdown">
                    <button className="dropdown-button">Item 4</button>
                    <Paper
                      class="dropdown-menu"
                      elevation={0}
                      style={{
                        top: "-35px",
                        height: "950%",
                        width: "122px",
                        right: "-152%",
                        // backgroundColor: "#9999",
                        transform: "rotate(-90deg)",
                      }}
                    ></Paper>
                  </div>
                </li>
                <li>
                  <div class="dropdown">
                    <button className="dropdown-button">Item 5</button>
                    <Paper
                      class="dropdown-menu"
                      elevation={0}
                      style={{
                        top: "-37px",
                        height: "950%",
                        width: "122px",
                        right: "-152%",
                        // backgroundColor: "#9999",
                        transform: "rotate(-90deg)",
                      }}
                    ></Paper>
                  </div>
                </li>
              </ul>
              <Paper
                class="dropdown-menu_item"
                elevation={0}
                sx={{ height: "55px", width: "55px", backgroundColor: "#9999" }}
              ></Paper>
            </Paper>
          </div>
          {/* <ul
              class="dropdown-menu"
              // aria-labelledby="dropdownMenuButton"
              style={{ top: "25px" }}
            >
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default SearchNavbar;
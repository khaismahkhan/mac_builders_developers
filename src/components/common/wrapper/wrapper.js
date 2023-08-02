import React from "react";
import "./wrapper.scss";
import { Typography } from "@mui/material";
import { IsMobileWidth } from "../utill/utils";
const Wrapper = () => {
  const mobileWidth = IsMobileWidth();
  return (
    <div className="wrapper" style={{overflow:'hidden'}}>
      <Typography
        variant={mobileWidth ? "h6Joined" : "h3Joined"}
        className="wrapperTxt"
        color="secondary"
      >
        Projects of Mac Builders & Developers.
      </Typography>
    </div>
  );
};

export default Wrapper;

import React from "react";
import "./wrapper.scss";
import { Typography } from "@mui/material";
import { IsMobileWidth, IsTabletWidth } from "../utill/utils";
const Wrapper = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  return (
    <div className="wrapper" style={{ overflow: 'hidden' }}>
      <Typography
        variant={tabletWidth ? "h6Joined" : mobileWidth ? "h6Joined" : "h3Joined"}
        className="wrapperTxt"
      >
        Projects of Mac Builders & Developers.
      </Typography>
    </div>
  );
};

export default Wrapper;

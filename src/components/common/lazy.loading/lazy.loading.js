import React from "react";
import "./lazy.loading.scss";
import { CircularProgress, Typography } from "@mui/material";

const LazyLoading = () => {
  return (
    <div className="lazy d-flex flex-column align-items-center justify-content-center">
      <img
        height="150px"
        width="250px"
        src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
      ></img>
      <Typography className="heading text-center pt-3 text-white" variant="h6poppins">
        MAC BUILDERS & <span style={{ color: "#0c5352" }}>DEVELOPERS</span>
      </Typography>
      <CircularProgress size={50} />
    </div>
  );
};

export default LazyLoading;

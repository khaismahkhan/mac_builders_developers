import React from "react";
import "./cover.page.scss";
import { Typography } from "@mui/material";
import { IsMobileWidth } from "../../../../components/common/utill/utils";

const CoverPage = () => {
  const mobileWidth = IsMobileWidth();
  return (
    <div className="cover">
      <div className="cover-page">
        <div className="cover-label">
          <Typography
            variant={mobileWidth ? "H6poppins" : "h1poppins"}
            style={{ letterSpacing: mobileWidth ? "1px" : "4px" }}
            className="shinee"
          >
            FIND YOUR PLACE
          </Typography>
          <Typography
            className="font-weight-light"
            variant={mobileWidth ? "body3" : "subtitlepoppins"}
          >
            Building what's next in the heart of
            <span
              className="font-weight-bold pl-1"
              style={{ color: "#bce0cb" }}
            >
              City of Light.
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;

import { Typography } from "@mui/material";
import React from "react";
import { IsMobileWidth } from "../utill/utils";
import clsx from "clsx";

const Heading = (props) => {
  const { text, span } = props;
  const mobileWidth = IsMobileWidth();

  return (
    <div className={clsx(!mobileWidth && "text-center mb-5", mobileWidth && "text-center mb-2 mt-3")} style={{ position: "relative" }}>
      <Typography
        className="shaded text-center font-weight-bold"
        variant={clsx(!mobileWidth && "h3poppins", mobileWidth && "h6poppins")}
        style={{ opacity: "4%" }}
      >
        {text} {span}
      </Typography>
      <Typography
        className="heading text-center"
        variant={clsx(
          !mobileWidth && "h6poppins",
          mobileWidth && "subtitlepoppins"
        )}
      >
        {text} <span style={{ color: "#0c5352" }}>{span}</span>
      </Typography>
    </div>
  );
};

export default Heading;

import { Typography } from "@mui/material";
import React from "react";

const Heading = (props) => {
  const { text, span } = props;
  return (
    <div className="text-center mb-5" style={{ position: "relative" }}>
      <Typography
        className="shaded text-center font-weight-bold"
        variant="h3poppins"
        style={{ opacity: "4%" }}
      >
        {text} {span}
      </Typography>
      <Typography className="heading text-center" variant="h6poppins">
        {text} <span style={{ color: "#0c5352" }}>{span}</span>
      </Typography>
    </div>
  );
};

export default Heading;

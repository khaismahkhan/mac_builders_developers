import { Typography } from "@mui/material";
import React from "react";
import "./offers.scss"

const Offers = (props) => {
  return (
    <div className="d-flex p-3 m-4 paper-root w-40 h-100 align-items-center" style={{background:'#f2f7f1', borderRadius:10}}>
      <div className="mr-5">
        <div className="offer"></div>
      </div>

      <div>
        <Typography className="font-weight-bold" variant="h6" color="secondary">
          {props.title}
        </Typography>
        <Typography className="font-weight-light " variant="">
          20K jobs posted Daily
        </Typography>
      </div>
    </div>
  );
};

export default Offers;

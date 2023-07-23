import { Typography } from "@mui/material";
import React from "react";
import "./offers.scss";
import {
  IsMobileWidth,
  IsTabletWidth,
} from "../../../../components/common/utill/utils";
import clsx from "clsx";

const Offers = (props) => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  return (
    <div
      className={clsx(
        (!mobileWidth || !tabletWidth) &&
          "w-40 p-3 m-4 d-flex paper-root h-100 align-items-center offerWrapper",
        (mobileWidth || tabletWidth) &&
          "w-100 d-flex paper-root h-100 align-items-center offerWrapper"
      )}
    >
      <div
        className={clsx(
          (!mobileWidth || !tabletWidth) && "mr-5",
          (mobileWidth || tabletWidth) && "mr-2"
        )}
      >
        <div className="offer"></div>
      </div>

      <div>
        <Typography
          className="font-weight-bold"
          variant={clsx(
            (!mobileWidth || !tabletWidth) && "h6",
            (mobileWidth || tabletWidth) && "subtitle"
          )}
          color="secondary"
        >
          {props.title}
        </Typography>
        <Typography
          className="font-weight-light "
          variant={clsx(
            (!mobileWidth || !tabletWidth) && "subtitle",
            (mobileWidth || tabletWidth) && "subtitle2"
          )}
        >
          20K jobs posted Daily
        </Typography>
      </div>
    </div>
  );
};

export default Offers;

import { Button, Typography } from "@mui/material";
import React from "react";
import "./offer.label.scss";
import { IsMobileWidth } from "../utill/utils";
import clsx from "clsx";

const OfferLabel = () => {
  const mobileWidth = IsMobileWidth();
  return (
    <div id="offer-label">
      <div className="paper-root d-flex align-items-center bg-white" style={{borderRadius:20}}>
        <div
          className={clsx(
            !mobileWidth && "w-60 ml-5",
            mobileWidth && "ml-3 w-70"
          )}
        >
          <Typography
            variant="h2"
            color="secondary"
            className="font-weight-bold"
          >
            Grow With Us
          </Typography>
          <Typography
            variant={clsx(!mobileWidth && "body1", mobileWidth && "subtitle1")}
            className="pt-2"
          >
            Associate with us and make us your family to get the better home
            better life. Associate with us and make us your family to get the better home
            better life.
          </Typography>
          <Button
            href="https://wa.me/923242930832"
            variant="outlined"
            className="mt-2"
            target="_blank"
          >
            Book Now
          </Button>
        </div>
        <div className="w-40">
          <img
            className="image"
            src={`${process.env.PUBLIC_URL}/assets/images/team.jpg`}
            alt="product-img"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferLabel;

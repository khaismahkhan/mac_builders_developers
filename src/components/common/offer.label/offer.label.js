import { Button, Typography } from "@mui/material";
import React from "react";
import "./offer.label.scss";
import { IsMobileWidth, IsTabletWidth } from "../utill/utils";
import clsx from "clsx";

const OfferLabel = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  return (
    <div id="offer-label">
      <div
        className={clsx(
          (!mobileWidth || !tabletWidth) &&
            "justify-content-start paper-root d-flex align-items-center bg-white w-100 flex-wrap",
          (mobileWidth || tabletWidth) &&
            "justify-content-center paper-root d-flex align-items-center bg-white w-100 flex-wrap p-3"
        )}
        style={{ borderRadius: 20 }}
      >
        <div
          className={clsx(
            (!mobileWidth || !tabletWidth) && "w-55 ml-5",
            (mobileWidth || tabletWidth) && "w-100 text-center"
          )}
        >
          <Typography
            variant={clsx(!mobileWidth && "h2", mobileWidth && "h5")}
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
            better life. Associate with us and make us your family to get the
            better home better life.
          </Typography>
          <Button
            href="https://wa.me/923242930832"
            variant="contained"
            className="mt-2"
            target="_blank"
            data-aos="flip-left"
          >
            Book Now
          </Button>
        </div>
        <div
          className={clsx(
            (!mobileWidth || !tabletWidth) && "w-40",
            (mobileWidth || tabletWidth) && "w-100"
          )}
        >
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

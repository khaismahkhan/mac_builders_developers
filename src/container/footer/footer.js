import React from "react";
import { Link, Typography } from "@mui/material";
import clsx from "clsx";
import {
  IsMobileWidth,
  IsTabletWidth,
} from "../../components/common/utill/utils";

const Footer = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  return (
    <div
      className={
        mobileWidth ? "p-4 mt-5 ml-2 mr-2 mb-2" : "p-5 mt-5 ml-4 mr-4 mb-2"
      }
      style={{ background: "#033044", borderBottomRightRadius: 50 }}
    >
      <div
        className={clsx(
          !tabletWidth &&
            "d-flex w-100 justify-content-center pt-4 pb-4 text-white",
          (tabletWidth || mobileWidth) &&
            "d-flex w-100 justify-content-center pt-4 pb-4 text-white flex-wrap"
        )}
      >
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-25",
            (tabletWidth || mobileWidth) && "w-100 pt-3 pb-3"
          )}
        >
          <img
            style={{
              height: mobileWidth ? "80px" : "100px",
              width: mobileWidth ? "180px" : "230px",
            }}
            src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
            alt="header-logo"
          />
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-25",
            (tabletWidth || mobileWidth) && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2 font-weight-bold" variant="body1">
            Address
          </Typography>
          <Typography variant="body3">
            R-306 Sharifabad FB Area Block-1, Karachi
          </Typography>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-25",
            (tabletWidth || mobileWidth) && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2 font-weight-bold" variant="body1">
            Contact
          </Typography>
          <Typography variant="body3">
            Mail: khaismahilyaskhan00@gmail.com
          </Typography>
          <Typography variant="body3">Phone: +92 3352683699</Typography>
        </div>

        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-25",
            (tabletWidth || mobileWidth) && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2 font-weight-bold" variant="body1">
            Social
          </Typography>
          <Link
            href="https://www.facebook.com/porchamstore/"
            target="_blank"
            underline="hover"
            className="pb-1 ps-1 text-white"
          >
            <Typography variant="body3">Facebook</Typography>
          </Link>
          <Link
            href="https://www.instagram.com/porchamstore/"
            target="_blank"
            underline="hover"
            className="pb-1 ps-1 text-white"
          >
            <Typography variant="body3">Instagram</Typography>
          </Link>
          <Link
            href="https://twitter.com/PORCHAMSTORE"
            target="_blank"
            underline="hover"
            className="pb-1 ps-1 text-white"
          >
            <Typography variant="body3">Twitter</Typography>
          </Link>
        </div>
      </div>
      <div className="w-100 text-center p-3 border-top">
        <Typography variant="caption" className="text-white">
          © {new Date().getFullYear()} Mac Builders & Developers™, All Rights
          Reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

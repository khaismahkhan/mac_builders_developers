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
          (!tabletWidth && !mobileWidth) &&
            "d-flex w-100 justify-content-center pt-4 pb-4 text-white",
          (tabletWidth || mobileWidth) &&
            "d-flex w-100 justify-content-center pt-4 pb-4 text-white flex-wrap"
        )}
      >
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            (!tabletWidth && !mobileWidth) && "w-25",
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
            (!tabletWidth && !mobileWidth) && "w-25",
            (tabletWidth || mobileWidth) && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2 font-weight-bold" variant="body1">
            Address
          </Typography>
          <Typography variant="body3">
            Banglow No # 30 JM 1 51 Lal Chand H Road, Opp. Masjid-e-Aisha, Near
            NISTAR PARK, Parsi Colony Karachi, Pakistan
          </Typography>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            (!tabletWidth && !mobileWidth) && "w-25",
            (tabletWidth || mobileWidth) && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2 font-weight-bold" variant="body1">
            Contact
          </Typography>
          <Typography variant="body3">
            Mail: macbuilders.515@gmail.com
          </Typography>
          <Typography variant="body3">Phone: +92 324-2930832</Typography>
        </div>

        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            (!tabletWidth && !mobileWidth) && "w-25",
            (tabletWidth || mobileWidth) && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2 font-weight-bold" variant="body1">
            Social
          </Typography>
          <Link
            href="https://www.facebook.com/SOHAILLAKHANI100"
            target="_blank"
            underline="hover"
            className="pb-1 ps-1 text-white"
          >
            <Typography variant="body3">Facebook</Typography>
          </Link>
          <Link
            href="https://www.instagram.com/SOHAILLAKHANI100"
            target="_blank"
            underline="hover"
            className="pb-1 ps-1 text-white"
          >
            <Typography variant="body3">Instagram</Typography>
          </Link>
          <Link
            // href="https://twitter.com/PORCHAMSTORE"
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

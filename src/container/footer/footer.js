import React from "react";
import { Link, Typography } from "@mui/material";
import clsx from "clsx";
import { IsMobileWidth } from "../../components/common/utill/utils";

const Footer = () => {
  const mobileWidth = IsMobileWidth();
  return (
    <div className="paper-root w-100 ps-3 mt-5">
      <div className="w-100 pt-3">
        <img
          style={{ height: "60px", width: "230px" }}
          src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
          alt="header-logo"
        />
      </div>
      <div className="d-flex w-100 flex-wrap pt-4 pb-4">
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-55",
            mobileWidth && "w-100"
          )}
        >
          <Typography variant="h6" className="fw-bold">
            Porcham is 'Sign of culture',
          </Typography>
          <Typography
            className={clsx(
              !mobileWidth && "w-50 pb-2 pt-2",
              mobileWidth && "w-100 pb-2 pt-2"
            )}
            variant="body1"
            style={{ lineHeight: 1.7 }}
          >
            Our vision is to preserve all kinds of culture with ZERO STITCH of
            'Kameez shalwar/ Kurta Pajama' with the best fabric.
          </Typography>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-15",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2" variant="h6">
            Our Collections
          </Typography>
          <Link className="pb-1 ps-1 cursor-pointer" underline="none">
            Best
          </Link>
          <Link className="pb-1 ps-1 cursor-pointer" underline="none">
            Hot
          </Link>
          <Link className="pb-1 ps-1 cursor-pointer" underline="none">
            Exclusive
          </Link>
          <Link className="pb-1 ps-1 cursor-pointer" underline="none">
            Premium
          </Link>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-15",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2" variant="h6">
            Information
          </Typography>
          <Link className="pb-1 ps-1 cursor-pointer" underline="none">
            About Us
          </Link>
          <Link className="pb-1 ps-1 cursor-pointer" underline="none">
            Our Team
          </Link>
          <Link className="pb-1 ps-1 cursor-pointer" underline="none">
            Our Vision
          </Link>
          <Link className="pb-1 ps-1 cursor-pointer" underline="none">
            Privacy Policy
          </Link>
        </div>

        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-15",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2" variant="h6">
            Connect With Us
          </Typography>
          <Link
            href="https://www.facebook.com/porchamstore/"
            target="_blank"
            underline="hover"
            className="pb-1 ps-1"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/porchamstore/"
            target="_blank"
            underline="hover"
            className="pb-1 ps-1"
          >
            Instagram
          </Link>
          <Link
            href="https://twitter.com/PORCHAMSTORE"
            target="_blank"
            underline="hover"
            className="pb-1 ps-1"
          >
            Twitter
          </Link>
          <Link
            href="https://wa.me/923142593164"
            target="_blank"
            underline="hover"
            className="pb-1 ps-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="w-100 text-center p-3 border-top">
        <Typography variant="caption" className="text-theme">
          © {new Date().getFullYear()} PORCHAM™, All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

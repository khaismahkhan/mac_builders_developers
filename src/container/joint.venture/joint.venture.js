import React from "react";
import "../project.categories/project.categories.scss";
import Wrapper from "../../components/common/wrapper/wrapper";
import Heading from "../../components/common/heading/heading";
import "./joint.venture.scss";
import { Typography } from "@mui/material";
import clsx from "clsx";
import {
  IsMobileWidth,
  IsTabletWidth,
} from "../../components/common/utill/utils";

const JointVenture = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();

  const jointVenture = [
    { img: "nk bridge.jpeg" },
    { img: "bridge1.jpeg" },
    { img: "bridge2.jpeg" },
    { img: "bridge3.jpeg" },
    { img: "bridge4.jpeg" },
    { img: "bridge5.jpeg" },
    { img: "bridge6.jpeg" },
    { img: "bridge7.jpeg" },
    { img: "bridge8.jpeg" },
    { img: "bridge9.jpeg" },
    { img: "bridge10.jpeg" },
    { img: "bridge11.jpeg" },
    { img: "bridge12.jpeg" },
    { img: "bridge13.jpeg" },
  ];
  return (
    <div className="w-100" style={{ overflow: "hidden" }}>
      <div className={clsx(!mobileWidth && "p-5", mobileWidth && "p-2 mt-5")}>
        <div className={clsx(!mobileWidth && "mt-5", mobileWidth && "")}>
          <Heading text="PROJECT IN " span="ISLAMABAD" />
        </div>
        <div
          className={clsx(
            "d-flex justify-content-between align-items-center w-100",
            !mobileWidth && "mt-5",
            mobileWidth && "mt-1 pr-1 pl-1"
          )}
        >
          <div className="w-100 d-flex justify-content-center flex-wrap">
            <Typography
              className="font-weight-bold text-center"
              variant={mobileWidth ? "subtitle1" : "h6poppins"}
              color="secondary"
            >
              Mac Builders & Developers
            </Typography>
          </div>
          <div className="text-center w-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/shake.png`}
              alt="product-img"
              className="zoom"
              style={{
                height: mobileWidth ? 110 : 160,
                width: mobileWidth ? 130 : 220 ,
              }}
            />
          </div>
          <div className="w-100 d-flex justify-content-center flex-wrap">
            <Typography
              className="font-weight-bold text-center"
              variant={mobileWidth ? "subtitle1" : "h6poppins"}
              color="secondary"
            >
              Salman Enterprises
            </Typography>
          </div>
        </div>
        <div>
          <div
            className={clsx(
              !mobileWidth && "madina",
              mobileWidth && "madina mb-5"
            )}
          ></div>

          <Heading text="Partners'" span="Message" />
          <div
            className={clsx(
              !mobileWidth && "d-flex flex-column align-items-center mt-5",
              mobileWidth && "d-flex flex-column align-items-center mt-4"
            )}
          >
            <div
              className={clsx(!mobileWidth && "w-80", mobileWidth && "w-100")}
            >
              <Typography
                data-aos="fade-up"
                className="text-center"
                style={{ lineHeight: 1.5 }}
              >
                MAC & SE Developers is a joint venture between Salman
                Enterprises and Mac Builders. This Partnership aims to provide a
                state-of-art living and shopping experience for the residents of
                Islamabad. As partners of MAC & SE Developers, we are
                responsible for driving our business forward to the benefit of
                all our stakeholders and provide them with maximum return on
                their investments.With vast experience in the real estate
                construction industry, we are working with some of the best
                teams of architects, engineers and contractors to build the next
                landmark destination in the center of the most liveable
                community in the twin cities.
              </Typography>
              <div className="d-flex w-100 justify-content-between pt-4">
                <div
                  data-aos="fade-right"
                  className="d-flex flex-column text-center"
                >
                  <Typography
                    variant={mobileWidth ? "subtitle1" : "h6"}
                    className="font-weight-bold"
                    color="secondary"
                  >
                    Faizan Diwan
                  </Typography>
                  <Typography variant="body3" color="">
                    Partner
                  </Typography>
                </div>
                <div
                  data-aos="fade-left"
                  className="d-flex flex-column text-center"
                >
                  <Typography
                    variant={mobileWidth ? "subtitle1" : "h6"}
                    className="font-weight-bold"
                    color="secondary"
                  >
                    Asrar Ahmed Khan
                  </Typography>
                  <Typography variant="body3" color="">
                    Partner
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Wrapper/> */}
        <div className="d-flex justify-content-center flex-wrap mt-5">
          {jointVenture.map((image, index) => (
            <img
              data-aos="fade-up"
              src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
              alt="product-img"
              className="zoom"
              id={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JointVenture;

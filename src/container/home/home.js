import React from "react";
import { Button, Typography } from "@mui/material";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import ProjectsSection from "./components/projects.section/projects.section";
import ComingSoonCarousel from "../../components/common/carousels/coming.soon.carousel/coming.soon.carousel";
import Heading from "../../components/common/heading/heading";
import CoverPage from "./components/cover.page/cover.page";
import {
  IsMobileWidth,
  IsTabletWidth,
} from "../../components/common/utill/utils";
import clsx from "clsx";
import CompletedCarousels from "../../components/common/carousels/completed.carousels/completed.carousels";

const Home = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const history = useNavigate();

  const redirect = (project) => {
    history(`project/${project.replace(/\s+/g, "_")}`);
  };

  return (
    <div>
      <CoverPage />
      <div
        className={clsx(!mobileWidth && "m-5", mobileWidth && "mt-5 ml-1 mr-1")}
      >
        <Heading text="COMING" span="SOON" />
        <ComingSoonCarousel />
        <div
          className={clsx(
            !mobileWidth && "d-flex flex-wrap justify-content-center",
            mobileWidth && "d-flex flex-wrap justify-content-center mt-5"
          )}
        >
          <Heading text="CURRENT" span="PROJECTS" />
          <ProjectsSection redirect={redirect} />
          <div className={clsx(!mobileWidth && "", mobileWidth && "pt-2 pb-4")}>
            <Heading text="JOINT" span="VENTURE" />
          </div>
          <div
            className="joint w-90 mb-5"
            onClick={() => history("/joint-venture")}
          ></div>
        </div>
        <Heading text="COMPLETED" span="PROJECTS" />
        <CompletedCarousels />
        <div
          className={clsx(
            !mobileWidth &&
              !tabletWidth &&
              "d-flex p-4 hardwork paper-root w-100 mt-5",
            (mobileWidth || tabletWidth) &&
              "d-flex p-4 hardwork paper-root w-100 flex-wrap mt-5"
          )}
        >
          <div
            className={clsx(
              !mobileWidth &&
                !tabletWidth &&
                "w-60 d-flex flex-column justify-content-center align-items-start",
              (mobileWidth || tabletWidth) &&
                "w-100 d-flex flex-column justify-content-center align-items-start"
            )}
          >
            <Typography
              data-aos="zoom-up"
              className={clsx(
                !mobileWidth && "font-weight-bold pb-2",
                mobileWidth && "font-weight-bold pb-2 text-center"
              )}
              variant={mobileWidth ? "h6" : "h3"}
              color={{ color: "white" }}
            >
              Our Hardwork in Numbers
            </Typography>
            <Typography
              variant={mobileWidth && "body2"}
              data-aos="zoom-up"
              color={{ color: "white", letterSpacing: 2 }}
            >
              At MAC Builders & Developers, hard work is the foundation of every
              successful endeavor, and we take immense pride in quantifying our
              dedication through tangible results. Here's a glimpse into "Our
              Hard Work in Numbers": With 13 projects completed, a skilled
              workforce of 27 professionals with over 11 years of combined
              experience, and 24 hours of unwavering dedication, we have earned
              the trust of 99% satisfied clients. Incorporating sustainable
              practices of our projects.
            </Typography>
          </div>
          <div
            className={clsx(
              !mobileWidth && !tabletWidth && "w-40 ml-5 d-flex",
              (mobileWidth || tabletWidth) &&
                "w-100 d-flex justify-content-center mt-3"
            )}
          >
            <div className={clsx(!mobileWidth && "", mobileWidth && "m-1")}>
              <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box mb-4">
                <Typography
                  data-aos="zoom-out-up"
                  className="font-weight-bold"
                  variant={mobileWidth ? "h6" : "h2"}
                  color="secondary"
                >
                  11
                </Typography>
                <Typography className="text-center">
                  Years of Experience
                </Typography>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box">
                <Typography
                  data-aos="zoom-out-up"
                  className="font-weight-bold"
                  variant={mobileWidth ? "h6" : "h2"}
                  color="secondary"
                >
                  99<span style={{ fontSize: 40 }}>%</span>
                </Typography>
                <Typography className="text-center">Success Rate</Typography>
              </div>
            </div>
            <div className={clsx(!mobileWidth && "m-5", mobileWidth && "m-1")}>
              <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box mb-4">
                <Typography
                  data-aos="zoom-out-up"
                  className="font-weight-bold"
                  variant={mobileWidth ? "h6" : "h2"}
                  color="secondary"
                >
                  13
                </Typography>
                <Typography className="text-center">
                  Completed Projects
                </Typography>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box">
                <Typography
                  data-aos="zoom-out-up"
                  className="font-weight-bold"
                  variant={mobileWidth ? "h6" : "h2"}
                  color="secondary"
                >
                  47
                </Typography>
                <Typography className="text-center">Team Experts</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useRef, useState } from "react";
import {
  Button,
  FormControl,
  Input,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import "./home.scss";
import { IsMobileWidth } from "../../components/common/utill/utils";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import ProjectsSection from "./components/projects.section/projects.section";
import ComingSoonCarousel from "../../components/common/coming.soon.carousel/coming.soon.carousel";
import CoverPage from "./components/cover.page/cover.page";

const Home = () => {
  const history = useNavigate();

  const redirect = (project) => {
    history(`/${project}`);
  };

  return (
    <div>
      <CoverPage />
      <div className="m-5">
        <Typography className="heading mt-3 mb-5 text-center" variant="h4">
          UPCOMING PROJECTS
        </Typography>
        <ComingSoonCarousel />
        <div className="d-flex flex-wrap justify-content-center">
          <Typography className="heading mt-5 mb-3" variant="h4">
            CURRENT PROJECTS
          </Typography>
          <ProjectsSection redirect={redirect} />

          {/* harwork in numbers */}
          <div
            className="d-flex p-4"
            style={{ borderRadius: "10px", background: "#15557c" }}
          >
            <div className="w-60 d-flex flex-column justify-content-center align-items-start">
              <Typography
                className="font-weight-bold pb-2"
                variant="h3"
                color={{ color: "white" }}
              >
                Our Hardwork in Numbers
              </Typography>
              <Typography color={{ color: "white" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </div>
            <div className="w-40 ml-5 d-flex">
              <div>
                <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box mb-4">
                  <Typography
                    className="font-weight-bold"
                    variant="h2"
                    color="secondary"
                  >
                    439
                  </Typography>
                  <Typography>Executive Clients</Typography>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box">
                  <Typography
                    className="font-weight-bold"
                    variant="h2"
                    color="secondary"
                  >
                    439
                  </Typography>
                  <Typography>Executive Clients</Typography>
                </div>
              </div>
              <div className="m-5">
                <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box mb-4">
                  <Typography
                    className="font-weight-bold"
                    variant="h2"
                    color="secondary"
                  >
                    439
                  </Typography>
                  <Typography>Executive Clients</Typography>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box">
                  <Typography
                    className="font-weight-bold"
                    variant="h2"
                    color="secondary"
                  >
                    439
                  </Typography>
                  <Typography>Executive Clients</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Typography } from "@mui/material";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import ProjectsSection from "./components/projects.section/projects.section";
import ComingSoonCarousel from "../../components/common/coming.soon.carousel/coming.soon.carousel";
import Heading from "../../components/common/heading/heading";
import CoverPage from "./components/cover.page/cover.page";

const Home = () => {
  const history = useNavigate();

  const redirect = (project) => {
    history(`project/${project.replace(/\s+/g, "_")}`);
  };

  return (
    <div>
      {/* <CoverPage /> */}
      {/* <div className="m-5">
        <Heading text="COMPLETED" span="PROJECTS" />
        <ComingSoonCarousel />
        <div className="d-flex flex-wrap justify-content-center">
          <Heading text="CURRENT" span="PROJECTS" />
          <ProjectsSection redirect={redirect} />

          <div className="d-flex p-4 hardwork paper-root">
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
                    33
                  </Typography>
                  <Typography>Executive Clients</Typography>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box">
                  <Typography
                    className="font-weight-bold"
                    variant="h2"
                    color="secondary"
                  >
                    99%
                  </Typography>
                  <Typography>Success Rate</Typography>
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
                  <Typography>Complted Projects</Typography>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center paper-root hardwork-box">
                  <Typography
                    className="font-weight-bold"
                    variant="h2"
                    color="secondary"
                  >
                    27
                  </Typography>
                  <Typography>Team Experts</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;

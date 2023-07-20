import { Typography } from "@mui/material";
import React from "react";
import { IsMobileWidth } from "../../../../components/common/utill/utils";
import ProjectsCard from "../../../../components/common/projects.card/projects.card";

const ProjectsSection = (props) => {
  const {} = props;

  const projects = [
    {
      name: "NKRESIDENCY",
      location: "Gulshan-e-Iqbal",
      address: "Plot # B 3/4 13-D3, Gulshan-e-Iqbal, Karachi.",
      offers: "Luxury 3,4 & 5 Apartments and Showroom",
      image:"nk.jpeg",
      contacts: [
        {
          number: "0324-2930830",
        },
        {
          number: "021-32293704",
        },
      ],
    },
    {
      name: "Sara Residency",
      location: "Garden",
      address: "Plot # 320, GRW Near Prince Lawn, Garden West, Karachi.",
      offers: "Luxury 4 & 5 Apartments",
      contacts: [
        {
          number: "0324-2930830",
        },
        {
          number: "021-32293704",
        },
      ],
    },
    {
      name: "NKICON",
      location: "Faderal B Area",
      address: "Plot # 320, GRW Near Prince Lawn, Karachi.",
      offers: "Shops & Showroom",
      contacts: [
        {
          number: "0324-2930830",
        },
        {
          number: "021-32293704",
        },
      ],
    },
  ];

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.5,
    },
    650: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1080: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  };
  const mobileWidth = IsMobileWidth();
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {projects.map((project, index) => (
        <div className=" m-3" key={index}>
          <ProjectsCard {...props} {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;

import React from "react";
import ProjectsCard from "../../../../components/common/projects.card/projects.card";

const ProjectsSection = (props) => {

  const projects = [
    {
      name: "NKRESIDENCY",
      location: "Gulshan-e-Iqbal",
      address: "Plot # B 3/4 13-D3, Gulshan-e-Iqbal, Karachi.",
      offers: "Luxury 3,4 & 5 Apartments and Showroom",
      image: "nk.jpeg",
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
      name: "SARARESIDENCY",
      location: "Garden",
      address: "Plot # 320, GRW Near Prince Lawn, Garden West, Karachi.",
      offers: "Luxury 4 & 5 Apartments",
      image: "sara.jpeg",
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
      image: "nkicon.jpeg",
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

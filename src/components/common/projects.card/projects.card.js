import React from "react";
import "./projects.card.scss";
import { Button, Typography } from "@mui/material";

const ProjectsCard = (props) => {
  return (
    <div className="projectContainer d-flex">
      <div className="projectImage w-45"></div>
      <div className="w-55 ml-3 mt-5">
        <img
          style={{ height: 70, width: 240 }}
          src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
          alt="product-img"
        />
        <Typography variant="h6" className="font-weight-bold pt-4 ">
          {props.name}
        </Typography>
        <Typography className="font-weight-light pb-3" variant="body2">
          Powered by Mac Builders & Developer
        </Typography>
        <Typography className="font-weight-bold">{props.location}</Typography>
        <Typography variant="subtitle1" className="font-weight-bold pt-4 ">
          {props.offers}
        </Typography>
        <Typography className="font-weight-light pb-3" variant="subtitle2">
         Address: {props.address}
        </Typography>
        <Typography>
          {props.contacts.map((contact, index) => (
            <Typography>{contact.number}</Typography>
          ))}
        </Typography>
        <Button
          onClick={() => props.redirect(props.name)}
          style={{ background: "white", color: "black" }}
          className="mt-3"
        >
          See More
        </Button>
      </div>
    </div>
  );
};

export default ProjectsCard;

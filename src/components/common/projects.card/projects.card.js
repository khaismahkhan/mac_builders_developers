import React from "react";
import "./projects.card.scss";
import { Button, Typography } from "@mui/material";
import clsx from "clsx";
import { IsMobileWidth } from "../utill/utils";

const ProjectsCard = (props) => {
  const mobileWidth = IsMobileWidth();
  return (
    <div className="projectContainer paper-root d-flex">
      <div className="projectImage w-45">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`}
          alt="product-img"
          className="w-100 h-100"
        />
      </div>
      <div
        className={clsx(
          !mobileWidth && "w-55 ml-3 mt-4 projectContent",
          mobileWidth && "w-55 ml-3 mt-2 projectContent"
        )}
      >
        <img
          className="mac"
          src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
          alt="product-img"
        />
        <Typography
          variant={mobileWidth ? "subtitle" : "h6"}
          className="font-weight-bold pt-4 "
        >
          {props.name}
        </Typography>
        <Typography
          className="font-weight-light pb-3"
          variant={mobileWidth ? "caption" : "body2"}
        >
          Powered by Mac Builders & Developer
        </Typography>
        <Typography
          className="font-weight-bold"
          variant={mobileWidth && "body3"}
        >
          {props.location}
        </Typography>
        <Typography
          variant={mobileWidth ? "body3" : "subtitle2"}
          className="font-weight-bold pt-4 "
        >
          {props.offers}
        </Typography>
        <Typography
          className="font-weight-light pb-3 pt-1"
          variant={mobileWidth ? "caption" : "subtitle2"}
        >
          Address: {props.address}
        </Typography>
        <Typography>
          {props.contacts.map((contact, index) => (
            <Typography variant={mobileWidth ? "body3" : "subtitle2"}>
              {contact.number}
            </Typography>
          ))}
        </Typography>
        <Button
          onClick={() => props.redirect(props.name)}
          // style={{ background: "white", color: "black" }}
          className="mt-3 font-weight-bold"
          color="primary"
          data-aos="flip-left"
        >
          See Plan
        </Button>
      </div>
    </div>
  );
};

export default ProjectsCard;

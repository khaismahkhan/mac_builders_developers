import React from "react";
import "./gallery.scss";
import clsx from "clsx";
import { IsMobileWidth } from "../../components/common/utill/utils";
import Heading from "../../components/common/heading/heading";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import Tabs from "./components/tabs";
import ImageContainer from "./components/image.container";

const Gallery = (props) => {
  const mobileWidth = IsMobileWidth();

  const [state, setState] = useState({
    selectedTab: "ALL",
  });

  const handleClick = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saraBridgeView = [
    { img: "sarabridgeview.jpg" },
    { img: "sbv3.jpg" },
    { img: "sbv2.jpg" },
    { img: "sbv1.jpg" },
    { img: "sbv4.jpeg" },
    { img: "sbv5.jpeg" },
    { img: "sbv6.jpeg" },
    { img: "sbv7.jpeg" },
    { img: "sbv8.jpeg" },
    { img: "sbv9.jpeg" },
  ];

  return (
    <div className="w-100" style={{ overflow: "hidden" }}>
      <div className={clsx(!mobileWidth && "p-5", mobileWidth && "p-2 mt-5")}>
        <Heading text="IMAGE" span=" Gallery" />
        <Tabs {...state} handleClick={handleClick} />
        {state.selectedTab === "SARA_BRIDGE_VIEW" ? (
          // <ImageContainer images={saraBridgeView} />
          <Typography
            className="text-danger text-center pt-5 font-weight-bold"
            variant="body1"
          >
            No Images Available!
          </Typography>
        ) : (
          <Typography
            className="text-danger text-center pt-5 font-weight-bold"
            variant="body1"
          >
            No Images Available!
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Gallery;

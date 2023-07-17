import { Typography } from "@mui/material";
import React from "react";
import "./coming.soon.carousel.scss";

const ComingSoonCarousel = (props) => {
  const comingItems = [
    { name: "UROOJ ARCADE", image: "coat.jpeg", bg: "#131313", color: "#bb8a30" },
    { name: "ZOHRA RESIDENCY", image: "sherwani.jpeg", bg: "#055bb8", color: "white" },
    { name: "AL MUSTAFA PRIME", image: "kk.jpg", bg: "#ebebeb", color: "#101010" },
    { name: "NK BRIDGE VIEW", image: "kk.jpg", bg: "#fdc11e", color: "#101010" },
    { name: "SARA BLESSING", image: "kk.jpg", bg: "#d62196", color: "white" },
  ];
  const breakpoints = {
    320: {
      slidesPerView: 1.6,
    },
    400: {
      slidesPerView: 1.8,
    },
    640: {
      slidesPerView: 3,
    },
    868: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  };
  return (
    <div id="swiper-carousel">
      <div className="d-flex justify-content-between mr-5 ml-5">
      {comingItems.map((item, index) => (
          <div
            className="d-flex justify-content-center align-items-center paper-root circle cursor-pointer p-2"
            style={{ background: item.bg }}
          >
            <Typography
              variant="subtitle1"
              className="fw-semibold pt-3 txt"
              style={{ color: item.color }}
            >
              {item.name}
            </Typography>
          </div>
      ))}
      </div>
    </div>
  );
};

export default ComingSoonCarousel;

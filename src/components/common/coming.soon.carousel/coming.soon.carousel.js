import { Typography } from "@mui/material";
import React from "react";
import "./coming.soon.carousel.scss";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from 'swiper/modules';

const ComingSoonCarousel = (props) => {
  const comingItems = [
    { name: "UROOJ ARCADE", image: "coat.jpeg", bg: "#055bb8", color: "white" },
    {
      name: "ZOHRA RESIDENCY",
      image: "sherwani.jpeg",
      bg: "#cadb3d",
      color: "white",
    },
    {
      name: "AL MUSTAFA PRIME",
      image: "kk.jpg",
      bg: "#ebebeb",
      color: "#101010",
    },
    {
      name: "NK BRIDGE VIEW",
      image: "kk.jpg",
      bg: "#fdc11e",
      color: "#101010",
    },
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
      <Swiper
        className="mySwiper py-3"
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={breakpoints}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Navigation]}
      >
        {comingItems.map((item, index) => (
          <SwiperSlide className="d-flex justify-content-center" key={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ComingSoonCarousel;

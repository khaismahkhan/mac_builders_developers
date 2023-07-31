import { Typography, Button } from "@mui/material";
import React from "react";
import "./coming.soon.carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const ComingSoonCarousel = (props) => {
  const {} = props
  const comingItems = [
    { name: "UROOJ ARCADE", image: "coat.jpeg", bg: "#055bb8", color: "white" },
    {
      name: "ABBAS COMFORT",
      image: "sherwani.jpeg",
      bg: "#e1b428",
      color: "white",
    },
    {
      name: "ZOHRA RESIDENCY",
      image: "sherwani.jpeg",
      bg: "#cadb3d",
      color: "white",
    },
    {
      name: "AL MUSTAFA PRIME",
      image: "kk.jpg",
      bg: "#542327",
      color: "white",
    },
    {
      name: "NK BRIDGE VIEW",
      image: "kk.jpg",
      bg: "#684d9d",
      color: "white",
      soon: true,
    },
    {
      name: "SARA BLESSING",
      image: "kk.jpg",
      bg: "#d62196",
      color: "white",
      soon: true,
    },
  ];
  const breakpoints = {
    320: {
      slidesPerView: 1.3,
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

  const history = useNavigate();

  const redirect = (project) => {
    history(`project/${project.replace(/\s+/g, "_")}`);
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
              className="d-flex justify-content-center flex-column align-items-center paper-root circle cursor-pointer p-2"
              style={{ background: item.bg }}
            >
              <Typography
                variant="subtitle1"
                className="fw-semibold pt-3 txt"
                style={{ color: item.color }}
                onClick={() => redirect(item.name)}
              >
                {item.name}
              </Typography>
              {item.soon && (
                <div className="d-flex justify-content-center wrap">
                  <Button
                    data-aos="flip-left"
                    variant="contained"
                    className="soon"
                    style={{ position: "absolute", bottom: 40 }}
                    onClick={() => redirect(item.name)}
                  >
                    Coming Soon
                  </Button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ComingSoonCarousel;

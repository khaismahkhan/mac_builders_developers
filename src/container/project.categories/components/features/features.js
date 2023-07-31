import React from "react";
import "./features.scss";
import {Typography } from "@mui/material";

const Features = () => {
  const features = [
    { name: "Earthquake Proof", image: "dollar.avif" },
    { name: "Standby Generator", image: "dollar.avif" },
    { name: "Imported High Speed Lift", image: "dollar.avif" },
    { name: "Car Parking", image: "dollar.avif" },
    { name: "Ideally Located In The Busiest Vicinity", image: "dollar.avif" },
    { name: "Intercome System", image: "dollar.avif" },
    {
      name: "Modern Security Arrangements With Camera Monitoring Systems",
      image: "dollar.avif",
    },
    { name: "Cable System", image: "dollar.avif" },
    { name: "Telephone Point", image: "dollar.avif" },
    { name: "Imported Flooring Tiles", image: "dollar.avif" },
    { name: "Imported Bathroom Tiles With Panel", image: "dollar.avif" },
    { name: "Sanitary Fitting (Supreme Quality)", image: "dollar.avif" },
    { name: "Bathroom Fitting (Supreme Quality)", image: "dollar.avif" },
    { name: "Color With Roller (supreme Quality)", image: "dollar.avif" },
    { name: "Imported Locks For Doors", image: "dollar.avif" },
    {
      name: "2 Front Doors Solid Wood Panel Solid Flash Doors With Polish",
      image: "dollar.avif",
    },
    {
      name: "Aluminium Deluxe Quality With Tinted Glass",
      image: "dollar.avif",
    },
  ];
  return (
    <div className="w-100 d-flex flex-column paper-root feature">
      <div className="d-flex justify-content-center tagwrapper">
        <div className="paper-root d-flex justify-content-center align-items-center tag">
          <Typography className="pt-5 font-weight-bold">FEATURES</Typography>
        </div>
      </div>
      <div
        className="d-flex flex-wrap justify-content-center align-items-start w-100"
        style={{ marginTop: 100, paddingBottom: 50 }}
      >
        {features.map((feature, index) => (
          <div key={index} className=" m-1 p-3 text-center featureBox">
            {/* <div className="">
              <img
                style={{ height: 60, width: 80 }}
                src={`${process.env.PUBLIC_URL}/assets/images/${feature.image}`}
                alt="product-img"
              />
            </div> */}
            <i
              class="fas fa-star"
              style={{ color: "#A9C585", paddingLeft: 6 }}
            ></i>
            <Typography color="secondary" className="mt-2 font-weight-bold">
              {feature.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

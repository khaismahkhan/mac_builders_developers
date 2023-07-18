import { Typography } from "@mui/material";
import React from "react";
import Categories from "./components/categories/categories";
import "./project.categories.scss";
import Heading from "../../components/common/heading/heading";
import Wrapper from "../../components/common/wrapper/wrapper";
import { useParams } from "react-router-dom";
import Dialog from "./components/dialog/dialog";
import { useState } from "react";

const ProjectCategories = (props) => {
  const { project } = useParams();

  const [state, setState] = useState({
    project: project,
    plan: "",
    name: "",
    email: "",
    phone: "",
    isDialogOpen: false,
  });

  const nkCategories = [
    {
      type: "A1",
      bed: "3 BED DD",
      price: "18,255,600",
      booking: "7,302,240",
      monthly: "6,000,000",
      quarterly: "2,500,000",
      possession: "2,453,360",
      reverse: true,
      bg: "#ff5556",
    },
    {
      type: "A",
      bed: "3 BED DD",
      price: "17,425,800",
      booking: "6,970,320",
      monthly: "6,000,000",
      quarterly: "2,500,000",
      possession: "1,955,480",
      reverse: false,
      bg: "#bcf955",
    },
    {
      type: "B1",
      bed: "3 BED DD",
      price: "16,285,200",
      booking: "6,514,080",
      monthly: "6,000,000",
      quarterly: "2,500,000",
      possession: "1,271,120",
      reverse: true,
      bg: "#f8bc0c",
    },
    {
      type: "B",
      bed: "3 BED DD",
      price: "15,888,000",
      booking: "6,355,200",
      monthly: "6,000,000",
      quarterly: "2,500,000",
      possession: "1,032,800",
      reverse: false,
      bg: "#07ce58",
    },
    {
      type: "C",
      bed: "2 BED DD",
      price: "11,172,000",
      booking: "4,468,800",
      monthly: "4,500,000",
      quarterly: "1,250,000",
      possession: "953,200",
      reverse: true,
      bg: "#0252a4",
    },
    {
      type: "D",
      bed: "2 BED LOUNGE",
      price: "8,326,800",
      booking: "3,330,720",
      monthly: "3,000,000",
      quarterly: "1,000,000",
      possession: "996,080",
      reverse: false,
      bg: "#da9256",
    },
  ];

  const saraCategories = [
    {
      type: "A1",
      bed: "3 BED DD",
      price: "23,000,000",
      booking: "2,300,000",
      allocation: "2,300,000",
      star: "2,300,000",
      monthly: "10,800,000",
      ma: "300,000",
      yearly: "3,000,000",
      ya: "500,000",
      possession: "2,300,000",
      reverse: true,
      bg: "#ff5556",
    },
    {
      type: "A",
      bed: "3 BED DD",
      price: "21,500,000",
      booking: "2,150,000",
      allocation: "2,150,000",
      star: "2,150,000",
      monthly: "9,900,000",
      ma: "275,000",
      yearly: "3,000,000",
      ya: "500,000",
      possession: "2,150,000",
      reverse: false,
      bg: "#bcf955",
    },
    {
      type: "B1",
      bed: "2 BED DD",
      price: "16,000,000",
      booking: "1,600,000",
      allocation: "1,600,000",
      star: "1,600,000",
      monthly: "7,200,000",
      ma: "200,000",
      yearly: "1,800,000",
      ya: "300,000",
      possession: "2,200,000",
      reverse: true,
      bg: "#f8bc0c",
    },
    {
      type: "B",
      bed: "2 BED DD",
      price: "15,000,000",
      booking: "1,500,000",
      allocation: "1,500,000",
      star: "1,500,000",
      monthly: "6,300,000",
      ma: "175,000",
      yearly: "1,650,000",
      ya: "275,000",
      possession: "2,550,000",
      reverse: false,
      bg: "#07ce58",
    },
  ];

  const nkImages = [
    { img: "nk icon.jpeg" },
    { img: "nk 1.jpeg" },
    { img: "nk 2.jpeg" },
    { img: "nk 3.jpeg" },
    { img: "nk 4.jpeg" },
  ];

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = (type) => {
    setState({
      ...state,
      plan: type,
      isDialogOpen: true,
    });
  };
  const onClose = () => {
    setState({
      ...state,
      name: "",
      email: "",
      phone: "",
      isDialogOpen: false,
    });
  };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div>
      <Dialog
        {...state}
        {...props}
        handleChange={handleChange}
        open={state.isDialogOpen}
        handleSubmit={handleSubmit}
        onClose={onClose}
      />
      <Wrapper />

      <div className="m-5">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <Typography
              variant="h3"
              color="secondary"
              className="font-weight-bold"
            >
              INTRODUCTION
            </Typography>
            <div className="w-70">
              <Typography className="text-center mt-3">
                {project === "SARARESIDENCY" &&
                  `Sara Blessing is a prestigious multi-storeyed project located in the high valued area of Garden West. It offers 4 & 5 rooms deluxe executive  apartments embedded with almost every modern amenity of life. Buil on most modern planning, the project would be an absolutely seismic-proof one, incorporating the HI-TECH Construction technology and the finest building material.`}
                Laying one's hands comfortably to basic necessities of life in
                the essence of an ideal living place anywhere, but a place where
                on has a convenient access to every conceivable amenity has
                literally no metal. People with a discriminatingfaste for living
                compared to any other features, whatsoever. Project at an ideal
                location has everything to offer, making life enjoyable in every
                respect.
              </Typography>
              <Typography
                variant="h6"
                color="secondary"
                className="font-weight-bold mt-5 text-center"
              >
                Excited About the Location ?
              </Typography>
              <Typography className="text-center mt-3">
                Many people are quite choosy about the vicinity of a place they
                live in. Beacuse the environs of a particular locality also play
                a significant role from living point of view.{" "}
                {project === "NKRESIDENCY"
                  ? "NK Residency is situated at the most ideal and attractive central location of Block 13-D, Gulshan-e-Iqbal,"
                  : "Sara Blessing is situated at the most ideal and attractive central location of Garden West,"}
                Strategically located for a peaceful living with style and
                elegance in a crowded city like karachi, it has no parallel in
                the area. It is facilitated with well-maintained spacious roads,
                public transport, Schools, Mosques, supermarkets, playground and
                all other civic amenities in the close vicinity.
              </Typography>
            </div>
          </div>
        </div>
        {project === "NKRESIDENCY" || project === "SARARESIDENCY" ? (
          <>
            <Typography className="heading mt-5 mb-3 text-center" variant="h4">
              CATEGORIES AVAILABLE
            </Typography>
            {project === "NKRESIDENCY"
              ? nkCategories.map((category, index) => (
                  <Categories
                    {...category}
                    key={index}
                    {...state}
                    handleClick={handleClick}
                  />
                ))
              : saraCategories.map((category, index) => (
                  <Categories
                    {...category}
                    key={index}
                    {...state}
                    handleClick={handleClick}
                  />
                ))}
          </>
        ) : (
          <div className="d-flex justify-content-center flex-wrap mt-5">
            {nkImages.map((image, index) => (
              <img
                style={{ height: 700, width: 600 }}
                src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
                alt="product-img"
                className="zoom"
                id={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCategories;

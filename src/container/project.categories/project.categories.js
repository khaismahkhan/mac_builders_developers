import { Button, Typography } from "@mui/material";
import React from "react";
import Categories from "./components/categories/categories";
import "./project.categories.scss";
import Heading from "../../components/common/heading/heading";
import Wrapper from "../../components/common/wrapper/wrapper";
import { useNavigate, useParams } from "react-router-dom";
import Dialog from "./components/dialog/dialog";
import { useState } from "react";
import Features from "./components/features/features";
import clsx from "clsx";
import { IsMobileWidth } from "../../components/common/utill/utils";
import { isValidDeatils } from "./validator";

const ProjectCategories = (props) => {
  const { project } = useParams();
  const mobileWidth = IsMobileWidth();
  const projectName = project.replace(/_/g, " ");

  const history = useNavigate();

  const redirect = (path) => {
    history(`${path}`);
  };

  const [state, setState] = useState({
    project: projectName,
    plan: "",
    name: "",
    email: "",
    phone: "",
    isDialogOpen: false,
    loading: false,
    validationResult: {
      isValidOneFieldRequired: true,
    },
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
      image: "nk a1.jpeg",
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
      image: "nk a.jpeg",
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
      image: "nk b1.jpeg",
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
      image: "nk b.jpeg",
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
      image: "nk c.jpeg",
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
      image: "nk d.jpeg",
    },
  ];

  const saraBlessingCategories = [
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
      image: "sara a1.jpeg",
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
      image: "sara a.jpeg",
    },
    {
      type: "B",
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
      image: "sara b.jpeg",
    },
    {
      type: "C",
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
      image: "sara c.jpeg",
    },
  ];

  const saraResidencyCategories = [
    {
      type: "A1",
      bed: "3 BED DD",
      price: "47,000,000",
      booking: "18,800,000",
      monthly: "18,000,000",
      halfYearly: "4,500,000",
      possession: "5,700,000",
      reverse: true,
      bg: "#ff5556",
      image: "sara a1.jpeg",
    },
    {
      type: "A",
      bed: "3 BED DD",
      price: "47,000,000",
      booking: "18,800,000",
      monthly: "18,000,000",
      halfYearly: "4,500,000",
      possession: "5,700,000",
      reverse: false,
      bg: "#bcf955",
      image: "sara a.jpeg",
    },
    {
      type: "B",
      bed: "2 BED DD",
      price: "46,000,000",
      booking: "18,400,000",
      monthly: "18,000,000",
      halfYearly: "4,500,000",
      possession: "5,100,000",
      reverse: true,
      bg: "#f8bc0c",
      image: "sara b.jpeg",
    },
    {
      type: "C",
      bed: "2 BED DD",
      price: "46,000,000",
      booking: "18,400,000",
      monthly: "18,000,000",
      halfYearly: "4,500,000",
      possession: "5,100,000",
      reverse: false,
      bg: "#07ce58",
      image: "sara c.jpeg",
    },
  ];

  const saraBridgeViewCategories = [
    {
      type: "A",
      bed: "3 BED DD",
      price: "24,720,000",
      booking: "6,180,000",
      monthly: "10,500,000",
      ma: "250,000",
      halfYearly: "5,600,000",
      hya: "800,000",
      possession: "2,440,000",
      reverse: true,
      bg: "#ff5556",
      image: "sbv4.jpeg",
    },
    {
      type: "A1",
      bed: "3 BED DD",
      price: "23,904,000",
      booking: "5,976,000",
      monthly: "10,080,000",
      ma: "240,000",
      halfYearly: "5,600,000",
      hya: "800,000",
      possession: "2,248,000",
      reverse: false,
      bg: "#bcf955",
      image: "sbv5.jpeg",
    },
    {
      type: "B",
      bed: "2 BED DD",
      price: "17,824,000",
      booking: "4,456,000",
      monthly: "8,400,000",
      ma: "200,000",
      halfYearly: "3,150,000",
      hya: "450,000",
      possession: "1,818,000",
      reverse: true,
      bg: "#f8bc0c",
      image: "sbv6.jpeg",
    },
    {
      type: "B1",
      bed: "2 BED DD",
      price: "17,712,000",
      booking: "4,428,000",
      monthly: "8,400,000",
      ma: "200,000",
      halfYearly: "3,080,000",
      hya: "440,000",
      possession: "1,804,000",
      reverse: false,
      bg: "#07ce58",
      image: "sbv7.jpeg",
    },
    {
      type: "B2",
      bed: "2 BED DD",
      price: "17,600,000",
      booking: "4,400,000",
      monthly: "8,400,000",
      ma: "200,000",
      halfYearly: "3,010,000",
      hya: "430,000",
      possession: "1,790,000",
      reverse: true,
      bg: "#0252a4",
      image: "sbv8.jpeg",
    },
    {
      type: "B3",
      bed: "2 BED DD",
      price: "15,552,000",
      booking: "3,888,000",
      monthly: "7,350,000",
      ma: "175,000",
      halfYearly: "2,800,000",
      hya: "400,000",
      possession: "1,514,000",
      reverse: false,
      bg: "#077b8a",
      image: "sbv9.jpeg",
    },
  ];

  const nkImages = [
    { img: "nkicon.jpeg" },
    { img: "nk 1.jpeg" },
    { img: "nk 2.jpeg" },
    { img: "nk 3.jpeg" },
    { img: "nk 4.jpeg" },
  ];

  const urrojArcade = [{ img: "UroojArcade.jpeg" }];

  const zohraResidency = [{ img: "ZohraResidency.jpeg" }];

  const alMustafa = [
    { img: "mustafa1.jpeg" },
    { img: "mustafa2.jpeg" },
    { img: "mustafa3.jpeg" },
  ];

  const nkBridge = [
    { img: "nk bridge.jpeg" },
    { img: "bridge1.jpeg" },
    { img: "bridge2.jpeg" },
    { img: "bridge3.jpeg" },
    { img: "bridge4.jpeg" },
    { img: "bridge5.jpeg" },
    { img: "bridge6.jpeg" },
    { img: "bridge7.jpeg" },
    { img: "bridge8.jpeg" },
    { img: "bridge9.jpeg" },
    { img: "bridge10.jpeg" },
    { img: "bridge11.jpeg" },
    { img: "bridge12.jpeg" },
    { img: "bridge13.jpeg" },
  ];

  const saraBlessing = [
    { img: "sara blessing.jpg" },
    { img: "sb8.jpeg" },
    { img: "sb1.jpeg" },
    { img: "sb2.jpeg" },
    { img: "sb3.jpeg" },
    { img: "sb4.jpeg" },
    { img: "sb5.jpeg" },
    { img: "sb6.jpeg" },
    { img: "sb7.jpeg" },
  ];

  const abbasComfort = [
    { img: "abbas.jpeg" },
    { img: "abbas1.jpeg" },
    { img: "abbas2.jpeg" },
    { img: "abbas3.jpeg" },
    { img: "abbas4.jpeg" },
    { img: "abbas5.jpeg" },
    { img: "abbas6.jfif" },
  ];

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
      loading: false,
    });
  };

  const BASE_URL = "https://kind-rose-shrimp-suit.cyclic.app";

  const handleSubmit = async () => {
    const validationResult = isValidDeatils(state);
    setState({ ...state, validationResult });
    if (validationResult?.isAllValid) {
      try {
        setState({
          ...state,
          loading: true,
        });
        const url = `${BASE_URL}/api/v1/auth/signup`;
        const data = {
          userName: state.name,
          phoneNumber: state.phone,
          email: state.email,
          plan: state.project,
          category: state.plan,
        };

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        onClose();
        console.log(responseData);
      } catch (error) {
        console.error("Error:", error);
        setState({
          ...state,
          loading: false,
        });
      }
    }
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
      <div className={clsx(!mobileWidth && "p-5", mobileWidth && "p-2")}>
        <div className="d-flex flex-wrap justify-content-center">
          <div
            data-aos="fade-up"
            className="d-flex flex-column align-items-center"
          >
            {project === "NK_RESIDENCY" ||
            project === "SARA_RESIDENCY" ||
            "SARA_BRIDGE_VIEW" ? (
              <>
                {/* <Heading text="CURRENT" span="PROJECT" /> */}
                <Typography
                  variant="h5"
                  color="secondary"
                  className="font-weight-bold text-center"
                >
                  {projectName}
                </Typography>
                <Typography className="mt-3 text-center">
                  {project === "NK_RESIDENCY"
                    ? "Address : Plot # B 3/4 13-D3, Gulshan-e-Iqbal, Karachi."
                    : project === "SARA_RESIDENCY"
                    ? "Address : Plot # 107,OPP Court Yard Banquet, Alamghir Road, Bahadurabad, Karachi."
                    : project === "SARA_BRIDGE_VIEW"
                    ? "Address : PLot # ST-06 Block-1, Gulistan e Jauhar, Karachi"
                    : ""}
                </Typography>
                <Typography
                  variant="h6"
                  color="secondary"
                  className="font-weight-bold text-center mt-3"
                >
                  INTRODUCTION
                </Typography>
                <div
                  className={clsx(
                    !mobileWidth && "w-70",
                    mobileWidth && "w-100"
                  )}
                >
                  <Typography className="text-center mt-3">
                    {project === "SARA_RESIDENCY" &&
                      `Sara Residency is a prestigious multi-storeyed project located in the high valued area of Bahadurabad. It offers 5 rooms deluxe executive  apartments embedded with almost every modern amenity of life. Buil on most modern planning, the project would be an absolutely seismic-proof one, incorporating the HI-TECH Construction technology and the finest building material.`}
                    {project === "SARA_BRIDGE_VIEW" &&
                      `Sara Bridge View is a Prestigious multi-storyed Project
                      located in the High value Area of Gulistan-e-jauhar.
                      It Offer 4 & 5 Rooms deluxe executive Apartments &
                      Showrooms Embedded with almost every Modern
                      amenity of Life.`}
                    Laying one's hands comfortably to basic necessities of life
                    in the essence of an ideal living place anywhere, but a
                    place where on has a convenient access to every conceivable
                    amenity has literally no metal. People with a discriminating
                    faste for living compared to any other features, whatsoever.
                    Project at an ideal location has everything to offer, making
                    life enjoyable in every respect.
                  </Typography>
                  <Typography
                    variant="h6"
                    color="secondary"
                    className="font-weight-bold mt-5 text-center"
                  >
                    Excited About the Location ?
                  </Typography>
                  <Typography className="text-center mt-3">
                    Many people are quite choosy about the vicinity of a place
                    they live in. Beacuse the environs of a particular locality
                    also play a significant role from living point of view.{" "}
                    {project === "NK_RESIDENCY"
                      ? "NK Residency is situated at the most ideal and attractive central location of Block 13-D, Gulshan-e-Iqbal,"
                      : project === "SARA_BRIDGE_VIEW"
                      ? "Sara Bridge View is situated at the most ideal and attractive central location of Gulistan-e-Jauhar,"
                      : "Sara Residency is situated at the most ideal and attractive central location of Bahadurabad, "}
                    Strategically located for a peaceful living with style and
                    elegance in a crowded city like karachi, it has no parallel
                    in the area. It is facilitated with well-maintained spacious
                    roads, public transport, Schools, Mosques, supermarkets,
                    playground and all other civic amenities in the close
                    vicinity.
                  </Typography>
                </div>
              </>
            ) : project === "SARA_BLESSING" || project === "NK_BRIDGE_VIEW" ? (
              <div
                className={clsx(
                  !mobileWidth && "w-70 text-center",
                  mobileWidth && "w-100 text-center"
                )}
              >
                <Heading text="COMING" span="SOON" />
                <Typography
                  variant="h6"
                  color="secondary"
                  className="font-weight-bold text-center"
                >
                  {projectName}
                </Typography>
                <Typography className="mt-3 text-center">
                  {project === "SARA_BLESSING"
                    ? "Address : Plot # 320, OPP Prince Lawn Near PSO Pump Garden West, Karachi."
                    : project === "NK_BRIDGE_VIEW"
                    ? "Address : Plot # 441, Garden West, Karachi."
                    : ""}
                </Typography>
                <Button
                  onClick={() => redirect("/contact-us")}
                  className="font-weight-bold mt-3"
                  color="primary"
                  data-aos="flip-left"
                >
                  For More Details
                </Button>
                <Typography
                  variant="h6"
                  color="secondary"
                  className="font-weight-bold text-center mt-4"
                >
                  INTRODUCTION
                </Typography>
                <Typography className="text-center mt-3">
                  {project === "SARA_BLESSING"
                    ? `Sara Blessing is a prestigious multi-storeyed project located in the high valued area of Garden. It offers 3, 4, 5 Rooms Apartments and Showrooms embedded with almost every modern amenity of life. Buil on most modern planning, the project would be an absolutely seismic-proof one, incorporating the HI-TECH Construction technology and the finest building material.`
                    : project === "NK_BRIDGE_VIEW"
                    ? `NK Bridge View is a prestigious multi-storeyed project located in the high valued area of Garden. It offers 3, 4, 5 Rooms Apartments and Showrooms embedded with almost every modern amenity of life. Buil on most modern planning, the project would be an absolutely seismic-proof one, incorporating the HI-TECH Construction technology and the finest building material.`
                    : null}
                  Laying one's hands comfortably to basic necessities of life in
                  the essence of an ideal living place anywhere, but a place
                  where on has a convenient access to every conceivable amenity
                  has literally no metal. People with a discriminating faste for
                  living compared to any other features, whatsoever. Project at
                  an ideal location has everything to offer, making life
                  enjoyable in every respect.
                </Typography>
              </div>
            ) : project === "NK_ICON" ? (
              <>
                <Heading text="NK ICON" />
                <Typography className="text-center">
                  Address : Plot # 272, A.M OPP Pearadise Hotel Near Passport
                  Office Saddar, Karachi.
                </Typography>
                <div className="text-center">
                  <Button
                    onClick={() => setState({ ...state, isDialogOpen: true })}
                    className="font-weight-bold mt-3"
                    color="primary"
                    data-aos="flip-left"
                  >
                    Show Your Interest
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Heading text="COMPLETED" span="PROJECT" />
                <Typography
                  variant="h6"
                  color="secondary"
                  className="font-weight-bold text-center"
                >
                  {projectName}
                </Typography>
                <Typography className="mt-3 text-center">
                  {project === "ZOHRA_RESIDENCY"
                    ? "Address : Plot # 434, Amil Colony Jamshed Road, Karachi."
                    : project === "UROOJ_ARCADE"
                    ? "Address : Plot # 711, Fatima Jinnah Colony Jamshed Road, Karachi."
                    : project === "AL_MUSTAFA_PRIME"
                    ? "Address : Plot # E-166, P.E.C.H.S Society, Karachi."
                    : project === "ABBAS_COMFORT"
                    ? "Address : Plot # C.11 Block 20 FB Area Gulberg Town Ancholi, Karachi"
                    : null}
                </Typography>
                {/* <div className="mt-3">
                  <iframe
                    style={{
                      height: "260px",
                      width: mobileWidth ? "100%" : "600px",
                    }}
                    class="gmap_iframe"
                    width="100%"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src={`https://maps.google.com/maps?q=${
                      project === "ABBAS_COMFORT"
                        ? "abbas comforts"
                        : "abbas comforts"
                    }&t=&z=10&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                </div> */}
                <Button
                  onClick={() => redirect("/contact-us")}
                  className="font-weight-bold mt-3"
                  color="primary"
                  data-aos="flip-left"
                >
                  For More Details
                </Button>
              </>
            )}
          </div>
        </div>

        {project === "NK_RESIDENCY" ||
        project === "SARA_RESIDENCY" ||
        project === "SARA_BRIDGE_VIEW" ? (
          <>
            <Heading text="CATEGORIES AVAILABLE" />

            {project === "NK_RESIDENCY"
              ? nkCategories.map((category, index) => (
                  <Categories
                    {...category}
                    key={index}
                    {...state}
                    handleClick={handleClick}
                  />
                ))
              : project === "SARA_BRIDGE_VIEW"
              ? saraBridgeViewCategories.map((category, index) => (
                  <Categories
                    {...category}
                    key={index}
                    {...state}
                    handleClick={handleClick}
                  />
                ))
              : saraResidencyCategories.map((category, index) => (
                  <Categories
                    {...category}
                    key={index}
                    {...state}
                    handleClick={handleClick}
                  />
                ))}
          </>
        ) : project === "UROOJ_ARCADE" ? (
          <div className="d-flex justify-content-center flex-wrap mt-5">
            {urrojArcade.map((image, index) => (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
                alt="product-img"
                className="zoom"
                id={index}
                data-aos="fade-up"
              />
            ))}
          </div>
        ) : project === "ZOHRA_RESIDENCY" ? (
          <div className="d-flex justify-content-center flex-wrap mt-5">
            {zohraResidency.map((image, index) => (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
                alt="product-img"
                className="zoom"
                id={index}
                data-aos="fade-up"
              />
            ))}
          </div>
        ) : project === "AL_MUSTAFA_PRIME" ? (
          <div className="d-flex justify-content-center flex-wrap mt-5">
            {alMustafa.map((image, index) => (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
                alt="product-img"
                className="zoom"
                id={index}
                data-aos="fade-up"
              />
            ))}
          </div>
        ) : project === "NK_BRIDGE_VIEW" ? (
          <div className="d-flex justify-content-center flex-wrap mt-5">
            {nkBridge.map((image, index) => (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
                alt="product-img"
                className="zoom"
                id={index}
                data-aos="fade-up"
              />
            ))}
          </div>
        ) : project === "SARA_BLESSING" ? (
          <div className="d-flex justify-content-center flex-wrap mt-5">
            {saraBlessing.map((image, index) => (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
                alt="product-img"
                className="zoom"
                id={index}
                data-aos="fade-up"
              />
            ))}
          </div>
        ) : project === "NK_ICON" ? (
          <>
            <div className="d-flex justify-content-center flex-wrap mt-5">
              {nkImages.map((image, index) => (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
                  alt="product-img"
                  className="zoom"
                  id={index}
                  data-aos="fade-up"
                />
              ))}
            </div>
          </>
        ) : project === "ABBAS_COMFORT" ? (
          <>
            <div className="d-flex justify-content-center flex-wrap mt-5">
              {abbasComfort.map((image, index) => (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
                  alt="product-img"
                  className="zoom"
                  id={index}
                  data-aos="fade-up"
                />
              ))}
            </div>
          </>
        ) : (
          <Typography
            className="text-center text-danger pt-3 font-weight-bold"
            variant="body1"
          >
            No Images Available
          </Typography>
        )}
      </div>
      <div data-aos="fade-up" className="mt-5">
        <Features />
      </div>
    </div>
  );
};

export default ProjectCategories;

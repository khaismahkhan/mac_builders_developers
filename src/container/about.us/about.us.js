import { Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../components/common/profile.card/profile.card";
import OfferLabel from "../../components/common/offer.label/offer.label";
import Offers from "./components/offers/offers";
import "./components/offers/offers.scss";
import Wrapper from "../../components/common/wrapper/wrapper";
import Heading from "../../components/common/heading/heading";

const AboutUs = () => {
  const profiles = [
    {
      name: "Khaismah Bin Ilyas",
      role: "IT Tech",
      image: "khaismah.jpeg",
    },
    {
      name: "Bazigh Waseem",
      role: "Marketing",
      image: "bazigh.jpg",
    },
    {
      name: "Muhammad Talal Shaikh",
      role: "Social Media",
      image: "talal.jpeg",
    },
    {
      name: "Khaismah Bin Ilyas",
      role: "IT Tech",
      image: "khaismah.jpeg",
    },
    {
      name: "Muhammad Talal Shaikh",
      role: "Social Media",
      image: "talal.jpeg",
    },
    {
      name: "Bazigh Waseem",
      role: "Marketing",
      image: "bazigh.jpg",
    },
    {
      name: "Khaismah Bin Ilyas",
      role: "IT Tech",
      image: "khaismah.jpeg",
    },
    {
      name: "Muhammad Talal Shaikh",
      role: "Social Media",
      image: "talal.jpeg",
    },
  ];

  const offers = [
    { title: "Development & IT" },
    { title: "Sales & Marketing" },
    { title: "Writing & Translation" },
    { title: "Design & Creative" },
    { title: "Admin & Customer Support" },
    { title: "Finance & Accounting" },
  ];
  return (
    <div>
      <Wrapper />
      <div className="m-5">
        <div className="d-flex flex-column align-items-center">
          {/* <Typography
            variant="h2"
            color="secondary"
            className="font-weight-bold"
          >
            Who We Are
          </Typography> */}
          <Heading text="WHO WE" span=" ARE" />
          <div className="w-70">
            <Typography className="text-center mt-3">
              Welcome to Vitazo. We are a trailblazing digital agency that
              crafts captivating online experiences and propels businesses to
              new heights in the digital realm. With a dazzling array of
              services ranging from web development to app development, digital
              marketing to UI/UX design, and DevOps security, we are your
              one-stop destination for all things digital.
            </Typography>
            <Typography className="text-center mt-3">
              Welcome to Vitazo. We are a trailblazing digital agency that
              crafts captivating online experiences and propels businesses to
              new heights in the digital realm. With a dazzling array of
              services ranging from web development to app development, digital
              marketing to UI/UX design, and DevOps security, we are your
              one-stop destination for all things digital.
            </Typography>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          {/* <Typography
            variant="h2"
            color="secondary"
            className="font-weight-bold mt-5"
          >
            Our Mission Statement
          </Typography> */}
          <Heading text="OUR MISSION" span=" STATEMENT" />
          <div className="d-flex justify-content-center align-items-center mt-4 w-90">
            <div className="w-50 mission"></div>
            <div className="w-50 p-5">
              <Typography className="">
                Our mission at Vitazo is to be the catalyst of digital
                brilliance for businesses worldwide. We are driven by a singular
                purpose: to transform the digital landscape with our visionary
                expertise. We strive to create extraordinary digital experiences
                that defy expectations, inspire connections, and propel our
                clients towards unrivaled success. With a fusion of creativity,
                technical prowess, and an unwavering commitment to excellence,
                we unlock the true potential of every brand we touch. Join us on
                this exhilarating journey as we reimagine what's possible in the
                realm of digital possibilities. Together, let's illuminate the
                world with our digital brilliance.
              </Typography>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center mt-5">
          {/* <Typography
            variant="h3"
            color="secondary"
            className="font-weight-bold"
          >
            About Our Services
          </Typography> */}
          <Heading text="ABOUT OUR" span=" SERVICES" />
          <div className="d-flex justify-content-center align-items-center mt-4 w-90">
            <div className="w-50 services"></div>
            <div className="w-50 p-5">
              <Typography className="">
                Owning a solitary unit or a whole structure or land, let our
                experts bear the obligation while you receive the benefits. We
                have a chosen group of trusted and qualified engineers,
                modelers, workers, and related partners for any helpful or
                extensive work/designated task of building and development or
                improvement of land on one-window-activity as well as on a
                turn-key premise with our cutting-edge mastery and experience
                and with our select and devoted property oversight specialists
                offering an all day, everyday correspondence help. GFS builders
                and developers guarantee high-standard development and
                improvement administrations and workmanship for you and your
                property, giving you a problem-free encounter. GFS made it our
                business to keep over-the-imprint importance and standard as we
                generally stay under the responsibility and convey more.
              </Typography>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center mt-5">
          {/* <Typography
            variant="h3"
            color="secondary"
            className="font-weight-bold"
          >
            What Can we Offer?
          </Typography> */}
          <Heading text="WHAT CAN WE" span=" OFFER?" />

          <div className="d-flex flex-wrap justify-content-center">
            {offers.map((offer, index) => (
              <Offers {...offer} key={index} />
            ))}
          </div>
        </div>
        <div className="d-flex flex-column align-items-center mt-5">
          <div className="w-70">
            <Typography
              className="text-center font-weight-bold"
              variant="h4"
              color="secondary"
            >
              The Brains Behind MAC Builders & Developers
            </Typography>
            <Typography className="text-center">
              Meet our exceptional team members – the true architects of digital
              magic. From visionary web developers who can breathe life into
              lines of code to UX/UI designers who craft mesmerizing
              experiences, our team is a collective of creative wizards
              dedicated to transforming your digital aspirations into tangible
              reality.
            </Typography>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-5">
          {profiles.map((profile, index) => (
            <div className="m-2">
              <ProductCard {...profile} />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <OfferLabel />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

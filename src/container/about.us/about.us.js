import { Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../components/common/profile.card/profile.card";
import OfferLabel from "../../components/common/offer.label/offer.label";
import Offers from "./components/offers/offers";
import "./components/offers/offers.scss";
import Wrapper from "../../components/common/wrapper/wrapper";
import Heading from "../../components/common/heading/heading";
import {
  IsMobileWidth,
  IsTabletWidth,
} from "../../components/common/utill/utils";
import clsx from "clsx";

const AboutUs = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();

  const profiles = [
    {
      name: "Sohail Lakhani",
      role: "General Manager",
      image: "sohail.jfif",
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
      <div className={clsx(!mobileWidth && "m-5", mobileWidth && "m-2")}>
        <div className="d-flex flex-column align-items-center">
          <Heading text="WHO WE" span=" ARE" />
          <div className={clsx(!mobileWidth && "w-70", mobileWidth && "w-100")}>
            <Typography
              data-aos="fade-up"
              className="text-center mt-3"
              style={{ lineHeight: 1.5 }}
            >
              MAC Builders and Developers have gained a solid reputation as a
              diversified construction company, renowned for their successful
              projects in Karachi. With their latest venture in Islamabad, they
              continue to showcase their drive for perpetual success. Led by the
              diligent supervision of Chief Executive Mr. Faizan Dewan, MAC
              Builders and Developers implement effective business management
              strategies that have propelled them to greater heights in the real
              estate market.
            </Typography>
            <Typography
              data-aos="fade-up"
              className="text-center mt-3"
              style={{ lineHeight: 1.5 }}
            >
              Mr. Dewan, with over 30 years of experience, brings a wealth of
              knowledge and principles to the industry, inspiring a new
              generation by revolutionizing accessibility and convenience in the
              real estate market. His innovative leadership and commitment to
              excellence are reflected in the residential and commercial
              developments that feature cutting-edge designs, superior
              craftsmanship, and responsive solutions that meet the evolving
              needs of their valued customers. MAC Builders and Developers have
              gained a solid reputation as a diversified construction company,
              renowned for their successful projects in Karachi. With their
              latest venture in Islamabad, they continue to showcase their drive
              for perpetual success.
            </Typography>
            <Typography
              data-aos="fade-up"
              className="text-center mt-3"
              style={{ lineHeight: 1.5 }}
            >
              Led by the diligent supervision of Chief Executive Mr. Faizan
              Dewan, MAC Builders and Developers implement effective business
              management strategies that have propelled them to greater heights
              in the real estate market. Mr. Dewan, with over 30 years of
              experience, brings a wealth of knowledge and principles to the
              industry, inspiring a new generation by revolutionizing
              accessibility and convenience in the real estate market. His
              innovative leadership and commitment to excellence are reflected
              in the residential and commercial developments that feature
              cutting-edge designs, superior craftsmanship, and responsive
              solutions that meet the evolving needs of their valued customers.
            </Typography>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Heading text="MESSAGE FROM" span=" CEO" />
          <div
            className={clsx(
              (!mobileWidth || !tabletWidth) &&
                "d-flex justify-content-center flex-wrap align-items-center mt-4 w-90",
              (mobileWidth || tabletWidth) &&
                "d-flex justify-content-center flex-wrap align-items-center mt-4 w-100"
            )}
          >
            <div
              data-aos="fade-right"
              className={clsx(
                (!mobileWidth || !tabletWidth) && "w-50 mission",
                (mobileWidth || tabletWidth) && "w-100 mission"
              )}
            ></div>
            <div
              className={clsx(
                (!mobileWidth || !tabletWidth) && "w-50 p-5",
                (mobileWidth || tabletWidth) && "w-100"
              )}
            >
              <Typography
                data-aos="fade-left"
                className="w-100"
                style={{ lineHeight: 2 }}
              >
                Integrity and reliability are the cornerstone of our company's
                reputation. At MAC Builders and Developers, we go beyond
                constructing houses and offices; we believe in building
                communities. Our commitment to reliability and trust ensures
                that we deliver state-of-the-art projects, offering luxurious
                living spaces with flexible and affordable payment plans. We
                understand the importance of fulfilling our clients' dreams and
                needs, and we always strive to deliver what we promise. Our
                dedication lies in never making commitments we cannot fulfill,
                ensuring transparency and client satisfaction throughout the
                process
              </Typography>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center mt-3">
          <Heading text="OUR" span=" PASSION" />
          <div
            className={clsx(
              (!mobileWidth || !tabletWidth) &&
                "d-flex justify-content-center flex-wrap align-items-center mt-4 w-90",
              (mobileWidth || tabletWidth) &&
                "d-flex justify-content-center flex-wrap align-items-center mt-4 w-100"
            )}
          >
            <div
              data-aos="fade-right"
              className={clsx(
                (!mobileWidth || !tabletWidth) && "w-50 services",
                (mobileWidth || tabletWidth) && "w-100 services"
              )}
            ></div>
            <div
              className={clsx(
                (!mobileWidth || !tabletWidth) && "w-50 p-5",
                (mobileWidth || tabletWidth) && "w-100 p-2"
              )}
            >
              <Typography
                data-aos="fade-left"
                className=""
                style={{ lineHeight: 2 }}
              >
                MAC builders and developers are committed to providing
                affordable housing options to their customers while ensuring
                that they offer luxurious amenities and high-quality utilities.
                With MAC, individuals can finally realize their dream of owning
                a house and transform their visions into reality. By
                prioritizing both affordability and quality, MAC aims to make
                homeownership accessible to everyone.
              </Typography>
            </div>
          </div>
        </div>
        {/* <div className="d-flex flex-column align-items-center mt-5 w-100">
          <Heading text="WHAT CAN WE" span=" OFFER?" />

          <div className="d-flex flex-wrap justify-content-center w-100">
            {offers.map((offer, index) => (
              <Offers {...offer} key={index} />
            ))}
          </div>
        </div> */}
        <div className="d-flex flex-column align-items-center mt-5">
          <div className={clsx(!mobileWidth && "w-70", mobileWidth && "w-100")}>
            <Typography
              className="text-center font-weight-bold"
              variant="h4"
              color="secondary"
              data-aos="fade-up"
            >
              The Brains Behind MAC Builders & Developers
            </Typography>
            <Typography
              data-aos="fade-up"
              className="text-center pt-3"
              style={{ lineHeight: 1.5 }}
            >
              Meet our exceptional team of dedicated employees is the driving
              force behind our success. From talented architects to skilled
              craftsmen, and diligent project managers to compassionate customer
              support, they bring innovative ideas, technical expertise, and
              unwavering commitment to every project. Their relentless passion
              and collective efforts form the foundation of our triumphs,
              allowing us to deliver excellence in every aspect of construction.
              Together, as a united family, we create better homes and forge a
              better future for all.
            </Typography>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-5">
          {profiles.map((profile, index) => (
            <div className="m-2">
              <ProductCard {...profile} key={index} />
            </div>
          ))}
        </div>
        <div className="mt-4 w-100">
          <OfferLabel />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

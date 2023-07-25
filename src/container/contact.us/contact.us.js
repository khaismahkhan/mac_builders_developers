import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./contact.us.scss";
import {
  IsMobileWidth,
  IsTabletWidth,
} from "../../components/common/utill/utils";
import clsx from "clsx";
import Appointments from "./components/appointments/appointments";
import FormSection from "./components/form/form";
import emailjs from "@emailjs/browser";

const ContactUs = (props) => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone:"",
    message: "",
    isLoading: "",
  });

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const sendEmail = (e) => {
    setState({ ...state, isLoading: true });
    e.preventDefault();
    emailjs
      .send(
        "service_ex5nwbk",
        "template_uh41u2i",
        {
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          message: state.message,
          phone:state.phone
        },
        "HN3HV0IfMBnIN2zjS"
      )
      .then(
        (result) => {
          console.log(result);
          setState({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            phone:"",
            isLoading: false,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact-us"
      className={clsx(!mobileWidth && "m-4", mobileWidth && "")}
    >
      <div
        data-aos="fade-up"
        className={clsx(
          (!tabletWidth || !mobileWidth) && "d-flex w-100 paper-root",
          (tabletWidth || mobileWidth) && "d-flex flex-column w-100"
        )}
      >
        <div
          className={clsx(
            "d-flex flex-column justify-content-center text-theme",
            (!tabletWidth || !mobileWidth) && "w-50 px-5",
            (tabletWidth || mobileWidth) && "w-100 px-4 mb-padding"
          )}
        >
          <Typography variant="subtitle1" className="pb-2">
            Contact
          </Typography>
          <Typography
            className="fw-bold"
            variant={clsx(
              (!tabletWidth || !mobileWidth) && "h1",
              (tabletWidth || mobileWidth) && "h2"
            )}
          >
            Get In Touch
          </Typography>
          <Typography
            className="fw-bold"
            variant={clsx(
              (!tabletWidth || !mobileWidth) && "h1",
              (tabletWidth || mobileWidth) && "h2"
            )}
          >
            With Us
          </Typography>
        </div>
        <div
          className={clsx(
            "connectImage",
            (!tabletWidth || !mobileWidth) && "w-50",
            (tabletWidth || mobileWidth) && "w-100"
          )}
        ></div>
      </div>
      <div
        className={clsx(
          (!mobileWidth || !tabletWidth) && "d-flex w-100 paper-root",
          (mobileWidth || tabletWidth) && "d-flex flex-column-reverse"
        )}
      >
        <div
        data-aos="fade-right"
          className={clsx(
            "appointmentImage",
            (!mobileWidth || !tabletWidth) && "w-50",
            (mobileWidth || tabletWidth) && "w-100"
          )}
        ></div>
        <div
        data-aos="fade-left"
          className={clsx(
            "d-flex flex-column justify-content-center text-theme",
            (!mobileWidth || !tabletWidth) && "w-50 px-5",
            (mobileWidth || tabletWidth) && "w-100 py-5 px-2"
          )}
        >
          <Appointments />
        </div>
      </div>
      <FormSection
        handleChange={handleChange}
        {...state}
        {...props}
        sendEmail={sendEmail}
      />
    </div>
  );
};

export default ContactUs;

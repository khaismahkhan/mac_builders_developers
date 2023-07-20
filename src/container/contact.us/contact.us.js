import React, { useRef, useState } from "react";
import {
  Button,
  FormControl,
  Input,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import "./contact.us.scss";
import { IsMobileWidth } from "../../components/common/utill/utils";
import clsx from "clsx";
import InputField from "../../components/common/site.label.textfield/site.label.textfield";
import Appointments from "./components/appointments/appointments";
import FormSection from "./components/form/form";
import emailjs from "@emailjs/browser";

const ContactUs = (props) => {
  const {} = props;
  const mobileWidth = IsMobileWidth();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    isLoading: "",
  });

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };
  const form = useRef();

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
      className={clsx(!mobileWidth && "m-5", mobileWidth && "")}
    >
      <div
        className={clsx(
          !mobileWidth && "d-flex w-100 paper-root",
          mobileWidth && "d-flex flex-column"
        )}
      >
        <div
          className={clsx(
            "d-flex flex-column justify-content-center text-theme",
            !mobileWidth && "w-50 px-5",
            mobileWidth && "w-100 px-4 mb-padding"
          )}
        >
          <Typography variant="subtitle1" className="pb-2">
            Contact
          </Typography>
          <Typography
            className="fw-bold"
            variant={clsx(!mobileWidth && "h1", mobileWidth && "h2")}
          >
            Get In Touch
          </Typography>
          <Typography
            className="fw-bold"
            variant={clsx(!mobileWidth && "h1", mobileWidth && "h2")}
          >
            With Us
          </Typography>
        </div>
        <div
          className={clsx(
            "connectImage",
            !mobileWidth && "w-50",
            mobileWidth && "w-100"
          )}
        ></div>
      </div>
      <div
        className={clsx(
          !mobileWidth && "d-flex w-100 paper-root",
          mobileWidth && "d-flex flex-column-reverse"
        )}
      >
        <div
          className={clsx(
            "appointmentImage",
            !mobileWidth && "w-50",
            mobileWidth && "w-100"
          )}
        ></div>
        <div
          className={clsx(
            "d-flex flex-column justify-content-center text-theme",
            !mobileWidth && "w-50 px-5",
            mobileWidth && "w-100 py-5 px-4"
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

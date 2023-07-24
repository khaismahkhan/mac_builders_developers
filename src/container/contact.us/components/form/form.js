import { TextareaAutosize, Typography } from "@mui/material";
import React, { useRef } from "react";
import InputField from "../../../../components/common/input.field/input.field";
import {
  IsMobileWidth,
  IsTabletWidth,
} from "../../../../components/common/utill/utils";
import clsx from "clsx";
import LoaderButton from "../../../../components/common/loader.button/loader.button";

const FormSection = (props) => {
  const { email, message, firstName, lastName,phone, isLoading } = props;
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();

  const form = useRef();

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="15000"
      className="py-5 w-100 d-flex flex-column"
    >
      <Typography
        variant={clsx(!mobileWidth && "h2", mobileWidth && "h5")}
        className="text-center font-weight-bolder text-theme pt-5 main-heading"
      >
        For Any Queries
      </Typography>
      <Typography variant="caption" className="text-center txt-gray pt-2 pb-5">
        Feel free to contact us ...
      </Typography>
      <form
        className="w-100 justify-content-center"
        ref={form}
        onSubmit={props.sendEmail}
      >
        <div className="w-100 d-flex justify-content-center">
          <div
            className={clsx(
              "d-flex justify-content-center flex-wrap",
              (!mobileWidth || !tabletWidth) && "w-70",
              (mobileWidth || tabletWidth) && "w-100"
            )}
          >
            <div
              className={clsx(
                (!mobileWidth || !tabletWidth) && "w-50 p-3",
                (mobileWidth || tabletWidth) && "w-100 p-3"
              )}
            >
              <InputField
                topAdornment="Enter Your First Name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) =>
                  props.handleChange("firstName", e.target.value)
                }
                name="firstName"
              />
            </div>
            <div
              className={clsx(
                (!mobileWidth || !tabletWidth) && "w-50 p-3",
                (mobileWidth || tabletWidth) && "w-100 p-3"
              )}
            >
              <InputField
                topAdornment="Enter Your Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => props.handleChange("lastName", e.target.value)}
                name="lastName"
              />
            </div>
            <div
              className={clsx(
                (!mobileWidth || !tabletWidth) && "w-50 p-3",
                (mobileWidth || tabletWidth) && "w-100 p-3"
              )}
            >
              <InputField
                topAdornment="Enter Your Email Address"
                placeholder="Email Address"
                value={email}
                onChange={(e) => props.handleChange("email", e.target.value)}
                name="email"
              />
            </div>
            <div
              className={clsx(
                (!mobileWidth || !tabletWidth) && "w-50 p-3",
                (mobileWidth || tabletWidth) && "w-100 p-3"
              )}
            >
              <InputField
                topAdornment="Enter Your Phone Number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => props.handleChange("phone", e.target.value)}
                name="phone"
              />
            </div>
            <div className="w-100 p-3">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Type your message ..."
                className="w-100 paper-root p-3"
                value={message}
                onChange={(e) => props.handleChange("message", e.target.value)}
                name="message"
                style={{ border: "none" }}
              />
            </div>
            <div
              className={clsx(
                (!mobileWidth || !tabletWidth) && "",
                (mobileWidth || tabletWidth) && "w-100 mx-3"
              )}
            >
              <LoaderButton
                variant="contained"
                // className="w-50 m-3"
                color="secondary"
                type="submit"
                onClick={props.sendEmail}
                loading={isLoading}
                data-aos="flip-left"
              >
                Send a Message
              </LoaderButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSection;

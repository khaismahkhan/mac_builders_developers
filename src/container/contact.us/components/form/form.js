import { TextareaAutosize, Typography, Button } from "@mui/material";
import React, { useRef } from "react";
import InputField from "../../../../components/common/input.field/input.field";
import { IsMobileWidth } from "../../../../components/common/utill/utils";
import clsx from "clsx";

const FormSection = (props) => {
  const { email, message, firstName, lastName, isLoading } = props;
  const mobileWidth = IsMobileWidth();
  const form = useRef();

  return (
    <div className="py-5 w-100 d-flex flex-column">
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
        //   onSubmit={sendEmail}
      >
        <div className="w-100 d-flex justify-content-center">
          <div
            className={clsx(
              "d-flex justify-content-center flex-wrap",
              !mobileWidth && "w-70",
              mobileWidth && "w-100"
            )}
          >
            <div
              className={clsx(
                !mobileWidth && "w-50 p-3",
                mobileWidth && "w-100 p-3"
              )}
            >
              <InputField
                topAdornment="Enter Your Name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) =>
                  props.handleChange("firstName", e.target.value)
                }
                name="c_name"
              />
            </div>
            <div
              className={clsx(
                !mobileWidth && "w-50 p-3",
                mobileWidth && "w-100 p-3"
              )}
            >
              <InputField
                topAdornment="Enter Your Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => props.handleChange("lastName", e.target.value)}
              />
            </div>
            <div className="w-100 p-3">
              <InputField
                topAdornment="Enter Your Email Address"
                placeholder="Email Address"
                value={email}
                onChange={(e) => props.handleChange("email", e.target.value)}
                name="reply_to"
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
              className={clsx(!mobileWidth && "", mobileWidth && "w-100 mx-3")}
            >
              <Button
                variant="contained"
                // className="w-50 m-3"
                color="secondary"
                type="submit"
                //   onClick={sendEmail}
                loading={isLoading}
              >
                Send a Message
              </Button>
            </div>
          </div>
        </div>
      </form>

      {/* <form ref={form} onSubmit={sendEmail}>
          <Input placeholder="Placeholder" value="hello khaismah" name="message"/>
          <input type="submit" value="Send" />
        </form> */}
    </div>
  );
};

export default FormSection;

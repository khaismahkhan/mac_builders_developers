import React, { useState, useRef } from "react";
import "./login.scss";
import { Typography } from "@mui/material";
import LoaderButton from "../../components/common/loader.button/loader.button";
import InputField from "../../components/common/input.field/input.field";

const Login = () => {
  const form = useRef();
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoading: false,
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const BASE_URL = "https://kind-rose-shrimp-suit.cyclic.app";

  const login = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });
      const url = `${BASE_URL}/api/v1/auth/signup`;
      const data = {
        email: state.email,
        password: state.password,
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
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
      setState({
        ...state,
        isLoading: false,
      });
    }
  };

  return (
    <div
      id="login"
      className="d-flex flex-column align-items-center justify-content-between w-100 pb-5"
      style={{ height: "100vh" }}
    >
      <div className="d-flex flex-column align-items-center">
        <img
          height="100%"
          width="250px"
          src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
        ></img>
        <Typography className="heading text-center pt-3" variant="h6poppins">
          MAC BUILDERS & <span style={{ color: "#0c5352" }}>DEVELOPERS</span>
        </Typography>
      </div>
      <div>
        <form
          className="w-100 justify-content-center"
          ref={form}
          onSubmit={login}
        >
          <div className="d-flex justify-content-center flex-column w-100">
            <Typography className="font-weight-light pb-2">
              Welcome to Mac Builders & Developers Platform.
            </Typography>
            <div className="w-100 mb-3">
              <InputField
                placeholder="Enter your Email Address"
                value={state.email}
                onChange={(e) => handleChange("email", e.target.value)}
                name="email"
                className="w-100"
              />
            </div>
            <div className="w-100 mb-3">
              <InputField
                placeholder="Enter your Password"
                value={state.password}
                onChange={(e) => handleChange("password", e.target.value)}
                name="password"
                type="password"
              />
            </div>
            <div className="w-100">
              <LoaderButton
                variant="contained"
                // className="w-50 m-3"
                color="secondary"
                type="submit"
                onClick={login}
                loading={state.isLoading}
              >
                LOGIN
              </LoaderButton>
            </div>
          </div>
        </form>
      </div>
      <div>
        <Typography variant="caption" className="">
          © {new Date().getFullYear()} Mac Builders & Developers™, All Rights
          Reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Login;

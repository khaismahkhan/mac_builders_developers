import React, { useState, useRef } from "react";
import "./login.scss";
import { Typography } from "@mui/material";
import LoaderButton from "../../components/common/loader.button/loader.button";
import InputField from "../../components/common/input.field/input.field";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const form = useRef();
  const [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const history = useNavigate();

  const BASE_URL = "https://kind-rose-shrimp-suit.cyclic.app";

  const login = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const response = await axios.post(`${BASE_URL}/api/v1/auth/login`, {
        email: state.email,
        password: state.password,
      });

      // Assuming the login API returns a token in the response.
      const { token } = response.data;

      // Save the token in local storage.
      localStorage.setItem("authToken", token);

      // Redirect to the dashboard page.
      history("/dashboard");
      setState({
        ...state,
        loading: false,
      });
    } catch (error) {
      console.error("Login failed", error);
      setState({
        ...state,
        loading: false,
      });
    }
  };

  return (
    <div
      id="login"
      className="d-flex flex-column align-items-center justify-content-between w-100 pt-2 pb-5"
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
                loading={state.loading}
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

import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { appTheme } from "./container/material.theme/app.theme/app.material.theme";
import CssBaseline from "@mui/material/CssBaseline";
import PageNotFound from "./container/not.found.page/not.found.page";
import Home from "./container/home/home";
import ContactUs from "./container/contact.us/contact.us";
import AboutUs from "./container/about.us/about.us";
import ProjectCategories from "./container/project.categories/project.categories";
import AppNavBar from "./container/app.navbar/app.navbar";
import Footer from "./container/footer/footer";
import googleOneTap from "google-one-tap";
import Dashboard from "./container/dashboard/dshboard";
import Login from "./container/login/login";

const options = {
  client_id:
    "282026411600-2jqa9druorbsru7dmbrki0dc1chll5v5.apps.googleusercontent.com", // required
  auto_select: false, // optional
  cancel_on_tap_outside: false, // optional
  context: "signin", // optional
};

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  // googleOneTap(options, (response) => {
  //   console.log(response);
  // });

  // useEffect(() => {
  //   // if (!loginData) {
  //     debugger
  //     googleOneTap(options, async (response) => {
  //       console.log(response);
  //       // const res = await fetch("/api/google-login", {
  //       //   method: "POST",
  //       //   body: JSON.stringify({
  //       //     token: response.credential,
  //       //   }),
  //       //   headers: {
  //       //     "Content-Type": "application/json",
  //       //   },
  //       // });
  //       // const data = await res.json();
  //       // setLoginData(data);
  //       // console.log(data)
  //       // localStorage.setItem("loginData", JSON.stringify(data));
  //     });
  //   // }
  // });

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Router>
            {/* <AppNavBar /> */}
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/:project" element={<ProjectCategories />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
            {/* <Footer /> */}
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;

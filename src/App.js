import "./App.scss";
import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { appTheme } from "./container/material.theme/app.theme/app.material.theme";
import CssBaseline from "@mui/material/CssBaseline";
import PageNotFound from "./container/not.found.page/not.found.page";
import googleOneTap from "google-one-tap";
import LazyLoading from "./components/common/lazy.loading/lazy.loading";
import { Button } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';
// import AppNavBar from "./container/app.navbar/app.navbar"
// import Footer from "./container/footer/footer"

const Home = React.lazy(() => import("./container/home/home"));
const AppNavBar = React.lazy(() => import("./container/app.navbar/app.navbar"));
const Footer = React.lazy(() => import("./container/footer/footer"));
const AboutUs = React.lazy(() => import("./container/about.us/about.us"));
const ContactUs = React.lazy(() => import("./container/contact.us/contact.us"));
const ProjectCategories = React.lazy(() =>
  import("./container/project.categories/project.categories")
);
const Dashboard = React.lazy(() => import("./container/dashboard/dashboard"));
const Login = React.lazy(() => import("./container/login/login"));

const options = {
  client_id:
    "282026411600-2jqa9druorbsru7dmbrki0dc1chll5v5.apps.googleusercontent.com", // required
  auto_select: false, // optional
  cancel_on_tap_outside: false, // optional
  context: "signin", // optional
};

function App() {

  let location = useLocation();

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const BASE_URL = "https://kind-rose-shrimp-suit.cyclic.app";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!loginData) {
      googleOneTap(options, async (response) => {
        console.log(response);
        const res = await fetch(`${BASE_URL}/api/v1/auth/google-login`, {
          method: "POST",
          body: JSON.stringify({
            token: response.credential,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setLoginData(data);
        console.log(data);
        localStorage.setItem("loginData", JSON.stringify(data));
      });
    }
  });

  useEffect(() => {
    Aos.init();
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  const { pathname } = useLocation();
  const hideNavBarAndFooter =
    pathname === "/login" || pathname === "/dashboard";


  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Suspense fallback={<LazyLoading />}>
            {!hideNavBarAndFooter && <AppNavBar />}
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route
                  path="/project/:project"
                  element={<ProjectCategories />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
            {!hideNavBarAndFooter && <Footer />}
          </Suspense>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;

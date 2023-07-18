import React, { useState, useEffect } from "react";
import { useStyle } from "./app.navbar.style";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Typography,
  Drawer,
  Grid,
} from "@mui/material";
import clsx from "clsx";
import {
  IsMobileWidth,
  IsTabletWidth,
} from "../../components/common/utill/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Link } from "react-scroll";
import "./app.navbar.scss";

const AppNavbar = () => {
  const classes = useStyle();
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  let location = useLocation();
  let navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };
  const [state, setState] = useState({
    isDrawerOpen: false,
  });
  const onChange = (name, value) => {
    setState({ ...state, [name]: value });
  };
  const showDrawer = () => {
    setState({ ...state, isDrawerOpen: true });
  };

  const hideDrawer = () => {
    setState({ ...state, isDrawerOpen: false });
  };
  const isToShowNavbarButtons = (location) => {
    if (location.pathname === "/login") {
      return false;
    } else {
      return true;
    }
  };
  const [navbarColor, setNavbarColor] = useState("");

  const handleScroll = () => {
    if (location.pathname === "/") {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setNavbarColor("#033044"); // Change to the desired color when scrolling
      } else {
        setNavbarColor("transparent"); // Change to the initial transparent color
      }
    } else {
      setNavbarColor("#033044"); // Change to the desired color when scrolling
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className="position-relative">
      <div className="whatsapp">
        <a href="https://wa.me/923242930832" target="_blank">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/whatsapp.png`}
            alt="whatsapp-logo"
            className="social-logo"
          />
        </a>
      </div>
      <div className="messenger">
        <a href="https://m.me/SOHAILLAKHANI100" target="_blank">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/messenger.png`}
            alt="messenger-logo"
            className="social-logo"
          />
        </a>
      </div>
      {!(mobileWidth || tabletWidth) ? (
        <AppBar
          position="fixed"
          style={{ backgroundColor: navbarColor }}
          classes={{ root: classes.appNavbar }}
          //   className="paper-root"
        >
          <Container maxWidth="xl" className="p-0">
            <Toolbar
              className={clsx(
                !mobileWidth && "d-flex flex-row align-items-center"
              )}
            >
              <Grid container className="d-flex align-items-center">
                <Grid xs={12} sm={3} md={6} lg={5} item>
                  <div className="cursor-pointer d-flex justify-content-start">
                    <a
                      className="d-flex justify-content-center align-items-center"
                      href="/"
                    >
                      <img
                        height="100%"
                        width="80px"
                        src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
                      ></img>
                      <Typography
                        variant="body1"
                        className={`text-transform-none text-white ml-2`}
                      >
                        Mac Builders & Developers
                      </Typography>
                    </a>
                  </div>
                </Grid>
                {/* {dropdownData && dropdownData.map((data, index) => {
                                return <div key={index}>
                                    <DropDownMenu
                                        name={data.name}
                                        label={data.items && data.items.label}
                                        imageSrc={data.items && data.items.imageSrc}
                                        data={data.items && data.items.child}
                                    />
                                </div>
                            })} */}
                <Grid
                  xs={12}
                  sm={9}
                  md={6}
                  lg={7}
                  item
                  className="d-flex justify-content-end"
                >
                  <Link
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={500}
                  >
                    <Button
                      variant="none"
                      className="text-transform-none text-white ml-2"
                      onClick={() => navigate("/about-us")}
                    >
                      About Us
                    </Button>
                  </Link>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={500}
                    onClick={() => navigate("/contact-us")}
                  >
                    <Button
                      variant="none"
                      className="text-transform-none text-white ml-2"
                    >
                      Contact Us
                    </Button>
                  </Link>
                  {/* <Link
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={500}
                  >
                    <Button
                      variant="outlined"
                      className="text-transform-none text-white ml-2"
                    >
                      Metamask not Installed
                    </Button>
                  </Link> */}
                </Grid>
                {/* <Link to="faqs" onClick={() => redirect('/')} spy={true} smooth={true} offset={50} duration={500} delay={500}>
                                <Button variant="none" className="text-transform-none text-white ml-2">
                                    FAQS
                                </Button>
                            </Link> */}
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <AppBar position="absolute" style={{ backgroundColor: navbarColor }} className={classes.responsiveAppNavbar}>
          <Container maxWidth="lg" classes={{ root: classes.container }}>
            <Toolbar className="d-flex flex-row justify-content-between align-items-center m-auto">
              <Typography
                variant="h6"
                component="div"
                sx={{ display: { md: "flex" } }}
              >
                <img
                  height="100%"
                  width="60px"
                  src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
                ></img>
              </Typography>
              {state.isDrawerOpen ? (
                <IconButton
                  size="medium"
                  onClick={hideDrawer}
                  className="cursor-pointer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/close.png`}
                    width="32px"
                    height="32px"
                    alt="close-icon"
                  />
                </IconButton>
              ) : (
                <IconButton size="medium" onClick={showDrawer}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/hamburger.png`}
                    width="32px"
                    height="32px"
                    alt="menu"
                  />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      )}
      <Drawer
        id="sidebar"
        anchor="left"
        open={state.isDrawerOpen}
        onClose={hideDrawer}
        className={classes.drawer}
        classes={{
          paper: mobileWidth ? classes.drawerPaper : classes.drawerOnTablet,
        }}
      >
        <Box
          role="presentation"
          className={clsx(
            tabletWidth
              ? classes.contentOnTablet
              : mobileWidth
              ? classes.contentOnMobile
              : classes.contentOnTablet
          )}
        >
          <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-2 mb-2">
            {/* {dropdownData && dropdownData.map((data, index) => {
                            return <div key={index}>
                                <DropDownMenu
                                    name={data.name}
                                    label={data.items && data.items.label}
                                    imageSrc={data.items && data.items.imageSrc}
                                    data={data.items && data.items.child}
                                />
                            </div>
                        })} */}
            <Link
              to="create-token"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={500}
            >
              <Button
                onClick={() => navigate("/about-us")}
                variant="none"
                className="text-transform-none text-white mt-2 mb-2"
              >
                About Us
              </Button>
            </Link>
            <Link
              to="pricing"
              onClick={() => navigate("/contact-us")}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={500}
            >
              <Button
                variant="none"
                className="text-transform-none text-white mt-2 mb-2"
              >
                Pricing
              </Button>
            </Link>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};
export default AppNavbar;

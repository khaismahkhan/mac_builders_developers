import React, { useState } from "react";
import {
  Typography,
  Box,
  IconButton,
  Menu,
  Button,
  MenuItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { IsMobileWidth } from "../../components/common/utill/utils";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const pages = ["SHOP", "TOOLS"];

const Header = (props) => {
  const navigate = useNavigate();

  const mobileWidth = IsMobileWidth();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    navigate("/coming-soon");
    setAnchorElNav(null);
  };
  const handleNavigate = (route) => {
    navigate(route);
    setAnchorElNav(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div id="header" className="w-100 position-sticky top-0 header">
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
      {/* for desktop */}
      <div
        className={clsx(
          mobileWidth && "d-none",
          !mobileWidth &&
            "d-flex justify-content-between align-items-center w-100 p-2 paper-root"
        )}
      >
        <div className="w-100">
          <div className="d-flex">
            <Button className="text-white m-1" onClick={() => navigate("/about-us")}>
              About Us
            </Button>
            <Button
              className="text-white m-1"
              onClick={() => navigate("/contact-us")}
            >
              Contact
            </Button>
            {pages.map((page, index) => (
              <Button
                key={index}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                // onMouseOver={handleClick}
                className="text-white m-1"
              >
                {page}
              </Button>
            ))}
            {/* <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              className="w-100"
            >
              <MenuItem onClick={handleClose}>
                <div className="w-100">hello</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu> */}
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          {/* <img
            style={{ height: "60px", width: "230px" }}
            src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
            alt="header-logo"
            onClick={() => navigate("/")}
          /> */}
          <Typography
            variant="h5"
            color="secondary"
            onClick={() => navigate("/")}
          >
            MAC
          </Typography>
        </div>
        <div className="w-100 d-flex justify-content-end">
          <IconButton aria-label="cart">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon style={{ color: "black" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
      {/* for mobile */}
      <div
        className={clsx(
          mobileWidth &&
            "d-flex justify-content-between align-items-center w-100 pe-2",
          !mobileWidth && "d-none"
        )}
      >
        <div className="d-flex align-items-center">
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem className="" onClick={() => handleNavigate("/")}>
                HOME
              </MenuItem>
              <MenuItem
                className=""
                onClick={() => handleNavigate("/contact-us")}
              >
                Contact
              </MenuItem>
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleClick}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className="ps-2">
            <img
              style={{ height: "40px", width: "150px" }}
              src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
              alt="header-logo"
            />
          </div>
        </div>
        <div>
          <IconButton aria-label="cart">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon style={{ color: "white" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;

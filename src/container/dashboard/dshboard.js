import { IconButton, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const BASE_URL = "https://kind-rose-shrimp-suit.cyclic.app";

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/auth/get`); // Replace with your API endpoint
        setData(response.data); // Update the component state with API response data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []);

  return (
    <>
      <div className="cursor-pointer d-flex justify-content-center w-100 align-items-center pt-3">
        <img
          height="100%"
          width="80px"
          src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
        ></img>
        <Typography variant="body1" className="font-weight-bold ml-2">
          Mac Builders & Developers
        </Typography>
        {/* </a> */}
      </div>
      <div className="ml-5 mr-5">
        <div className="d-flex justify-content-between align-items-center mb-2 w-100">
          <Typography color="secondary" className="font-weight-bold">
            Admin Dashboard
          </Typography>
          {/* <div className="pl-1">
            <IconButton>
              <i className="fa fa-sync"></i>
            </IconButton>
          </div> */}
        </div>
        <div className="w-100 d-flex pt-3 pb-3 paper-root">
          <div className="w-5 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>S.No</b>
          </div>
          <div className="w-20 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>Name</b>
          </div>
          <div className="w-25 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>Email</b>
          </div>
          <div className="w-15 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>Phone Number</b>
          </div>
          <div className="w-20 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>Category</b>
          </div>
          <div className="w-15 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>Plan</b>
          </div>
        </div>

        {data.map((user, index) => (
          <div className="d-flex flex-column mb-1 paper-root" key={index}>
            <div className="d-flex w-100 d-flex p-1 mt-1">
              <div className="w-5 d-flex justify-content-center align-items-center border-right  font-size-small font-weight-bold">
                {index + 1}
              </div>
              <div className="w-20 d-flex justify-content-center align-items-center border-right font-size-small">
                {user.userName ? user.userName : "N/A"}
              </div>
              <div className="w-25 d-flex justify-content-center align-items-center border-right  font-size-small">
                {user.email ? user.email : "N/A"}
              </div>

              <div className="w-15 d-flex justify-content-center align-items-center border-right  font-size-small">
                {user.phoneNumber ? user.phoneNumber : "N/A"}
              </div>
              <div className="w-20 d-flex justify-content-center align-items-center border-right  font-size-small">
                {user.category ? user.category : "N/A"}
              </div>
              <div className="w-15 d-flex justify-content-center align-items-center text-success font-size-small">
                {user.plan ? user.plan : "N/A"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;

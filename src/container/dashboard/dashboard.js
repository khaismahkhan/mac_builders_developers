import {
  Pagination,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NotificationsSkeleton from "../../components/common/notification.skeleton/notification.skeleton";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const history = useNavigate();

  const [data, setData] = useState([]);

  const [state, setState] = useState({
    token: localStorage.getItem("authToken"),
    loading: false,
  });

  const BASE_URL = "https://kind-rose-shrimp-suit.cyclic.app";

  useEffect(() => {
    // Check if the user is authenticated (token exists in local storage).
    if (!state.token) {
      // Redirect to the login page if not authenticated.
      history("/login");
    } else {
      // Call the authenticated API.
      fetchData();
    }
  }, [state.token]);

  const fetchData = async (page) => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const response = await axios.get(
        `${BASE_URL}/api/v1/auth/get?page=${page ? page : "0"}`,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );

      setData(response.data);
      setState({
        ...state,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch data", error);
      setState({
        ...state,
        loading: false,
      });
    }
  };

  const onPageChange = (e, page) => {
    fetchData(page - 1);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setState({
      ...state,
      token: null,
    });
  };
  return (
    <>
      <div className="cursor-pointer d-flex justify-content-center w-100 align-items-center p-3">
        <div className="d-flex align-items-center w-33">
          <img
            height="100%"
            width="80px"
            src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
          ></img>
          <Typography variant="body1" className="font-weight-bold ml-2">
            Mac Builders & Developers
          </Typography>
        </div>
        <div className="w-33 d-flex justify-content-center">
          <Typography color="secondary" className="font-weight-bold">
            Admin Dashboard
          </Typography>
        </div>
        <div className="w-33 d-flex justify-content-end">
          <Button color="secondary" onClick={logout}>
            logout
          </Button>
        </div>

        {/* </a> */}
      </div>
      <div className="ml-5 mr-5">
        <div className="w-100 d-flex pt-3 pb-3 paper-root">
          <div className="w-5 d-flex justify-content-center align-items-center font-size-small text-center">
            <Typography color="secondary" className="font-weight-bold">
              S.No
            </Typography>
          </div>
          <div className="w-20 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>User Name</b>
          </div>
          <div className="w-25 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>Email Address</b>
          </div>
          <div className="w-15 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>Phone Number</b>
          </div>
          <div className="w-20 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>Project</b>
          </div>
          <div className="w-15 d-flex justify-content-center align-items-center font-size-small text-center">
            <b>Category</b>
          </div>
        </div>

        {state.loading ? (
          <div>
            <NotificationsSkeleton />
            <NotificationsSkeleton />
            <NotificationsSkeleton />
            <NotificationsSkeleton />
          </div>
        ) : (
          data &&
          data.data?.map((user, index) => (
            <div className="d-flex flex-column mb-1 paper-root" key={index}>
              <div className="d-flex w-100 d-flex p-2 mt-1">
                <div className="w-5 d-flex justify-content-center align-items-center border-right font-size-small">
                  {index + 1}
                </div>
                <div className="w-20 d-flex justify-content-center align-items-center border-right font-size-small">
                  {user.userName ? user.userName : "N/A"}
                </div>
                <div className="w-25 d-flex justify-content-center align-items-center border-right font-size-small">
                  {user.email ? user.email : "N/A"}
                </div>

                <div className="w-15 d-flex justify-content-center align-items-center border-right font-size-small">
                  {user.phoneNumber ? user.phoneNumber : "N/A"}
                </div>
                <div className="w-20 d-flex justify-content-center align-items-center border-right font-size-small">
                  {user.plan ? user.plan : "N/A"}
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center text-success font-size-small font-weight-bold">
                  {user.category ? user.category : "N/A"}
                </div>
              </div>
            </div>
          ))
        )}

        <div className="d-flex justify-content-end pt-1">
          <Pagination
            disabled={state.loading ? true : false}
            page={parseInt(data.number) + 1}
            onChange={onPageChange}
            className="p-3 pb-5"
            color="secondary"
            count={data.totalPage + 1}
            shape="rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

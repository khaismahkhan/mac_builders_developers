import { Typography, Button } from "@mui/material";
import React from "react";

const Categories = (props) => {
  const {
    reverse,
    bg,
    booking,
    price,
    monthly,
    quarterly,
    possession,
    type,
    bed,
  } = props;

  return (
    <div
      className={
        reverse ? "d-flex w-100 flex-row-reverse" : "d-flex w-100 flex-row"
      }
    >
      <div className="w-50 leftBox box m-2 paper-root">
        <div className="d-flex flex-column justify-content-between center align-items-center h-100 p-3">
          <div>
            <Typography
              variant="h4"
              className="font-weight-bold"
              color="secondary"
            >
              Payment Schedule
            </Typography>
          </div>
          <div className="text-center w-90">
            <div className="d-flex justify-content-between m-1">
              <Typography variant="h6" color="secondary">
                On Booking 40%
              </Typography>
              <Typography variant="h6" color="secondary">
                Rs. {booking}/=
              </Typography>
            </div>
            <div className="d-flex justify-content-between m-1">
              <Typography variant="h6" color="secondary">
                Monthly Installment 15 X 400,000
              </Typography>
              <Typography variant="h6" color="secondary">
                Rs. {monthly}/=
              </Typography>
            </div>
            <div className="d-flex justify-content-between m-1">
              <Typography variant="h6" color="secondary">
                Quarterly Installment 05 X 500,000
              </Typography>
              <Typography variant="h6" color="secondary">
                Rs. {quarterly}/=
              </Typography>
            </div>
            <div className="d-flex justify-content-between m-1">
              <Typography variant="h6" color="secondary">
                ON Possession
              </Typography>
              <Typography variant="h6" color="secondary">
                Rs. {possession}/=
              </Typography>
            </div>
          </div>
          <div>
            <Button>Select</Button>
          </div>
        </div>
      </div>
      <div className="w-50 rightBox m-2 paper-root" style={{ background: bg }}>
        <div className="d-flex flex-column justify-content-between center align-items-center h-100 p-3">
          <div></div>
          <div className="text-center">
            <Typography variant="h2" className="font-weight-bold">
              TYPE <span style={{ color: "#fbeb23" }}>{type}</span>
            </Typography>
            <Typography variant="h3" className="font-weight-bold">
              {bed}
            </Typography>
          </div>
          <div className="d-flex justify-content-end w-100">
            <Typography variant="h5" className="font-weight-bold">
              Rs. {price}/=
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

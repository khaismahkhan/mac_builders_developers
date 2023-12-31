import { Typography } from "@mui/material";
import React from "react";
import {
  IsMobileWidth
} from "../../../../components/common/utill/utils";

const Appointments = () => {
  const mobileWidth = IsMobileWidth();
  return (
    <>
      <Typography
        variant={mobileWidth ? "h5" : "h2"}
        className="pb-4"
      >
        Make an Appointment
      </Typography>
      <div className="py-3">
        <Typography variant="subtitle1" className="text-theme font-weight-bold">
          Our Facebook Page:
        </Typography>
        <Typography variant="subtitle1">
          <a
            href="https://www.facebook.com/SOHAILLAKHANI100/"
            target="_blank"
            className="link2 pr-1"
          >
            facebook page
          </a>
          Mac Builders and Developers
        </Typography>
      </div>
      <div className="py-3">
        <Typography variant="subtitle1" className="text-theme font-weight-bold">
          General Inquiries:
        </Typography>
        <Typography variant="subtitle1" className="text-theme fw-semi-bold">
          Call +92 3242930832
        </Typography>
      </div>
      <div className="py-3">
        <Typography variant="subtitle1" className="text-theme font-weight-bold">
          Our Location:
        </Typography>
        <Typography variant="subtitle1" className="text-theme fw-semi-bold">
        Banglow No # 30 JM 1 51 Lal Chand H Road, Opp. Masjid-e-Aisha, Near
       NISTAR PARK, Parsi Colony Karachi, Pakistan
        </Typography>
      </div>
      <div>
        <iframe
          style={{ height: "260px", width: "100%" }}
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?q=mac builders and developer&t=&z=10&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </>
  );
};

export default Appointments;

import React from "react";
import "./wrapper.scss";
import { Typography } from "@mui/material";
import { IsMobileWidth, IsTabletWidth } from "../utill/utils";
import { useParams } from "react-router-dom";
const Wrapper = () => {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const { project } = useParams();

  const desktopPath =
    project === "NK_RESIDENCY"
      ? "d_nkresidency"
      : project === "SARA_RESIDENCY"
      ? "d_sararesidency"
      : project === "ZOHRA_RESIDENCY"
      ? "d_zohra"
      : project === "AL_MUSTAFA_PRIME"
      ? "d_almustafa"
      : project === "NK_BRIDGE_VIEW"
      ? "d_nkbridge"
      : project === "SARA_BRIDGE_VIEW"
      ? "d_sarabridge"
      : project === "SARA_BLESSING"
      ? "d_sarablessing"
      : project === "NK_ICON"
      ? "d_nkicon"
      : project === "ABBAS_COMFORT"
      ? "d_abbas"
      : project === "UROOJ_ARCADE"
      ? "d_urooj"
      : "desktop";

  const mblPath =
    project === "NK_RESIDENCY"
      ? "m_nkresidency"
      : project === "SARA_RESIDENCY"
      ? "m_sararesidency"
      : project === "ZOHRA_RESIDENCY"
      ? "m_zohra"
      : project === "AL_MUSTAFA_PRIME"
      ? "m_almustafa"
      : project === "NK_BRIDGE_VIEW"
      ? "m_nkbridge"
      : project === "SARA_BRIDGE_VIEW"
      ? "m_sarabridge"
      : project === "SARA_BLESSING"
      ? "m_sarablessing"
      : project === "NK_ICON"
      ? "m_nkicon"
      : project === "ABBAS_COMFORT"
      ? "m_abbas"
      : project === "UROOJ_ARCADE"
      ? "m_urooj"
      : "mobile";

  return (
    <>
      <div
        className="wrapper"
        style={{
          overflow: "hidden",
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${desktopPath}.png)`,
        }}
      >
        <Typography
          variant={
            tabletWidth ? "h6Joined" : mobileWidth ? "h6Joined" : "h3Joined"
          }
          className="wrapperTxt"
        >
          Projects of Mac Builders & Developers.
        </Typography>
      </div>
      <div
        className="m_wrapper"
        style={{
          overflow: "hidden",
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${mblPath}.png)`,
        }}
      >
        <Typography
          variant={
            tabletWidth ? "h6Joined" : mobileWidth ? "h6Joined" : "h3Joined"
          }
          className="wrapperTxt"
        >
          Projects of Mac Builders & Developers.
        </Typography>
      </div>
    </>
  );
};

export default Wrapper;

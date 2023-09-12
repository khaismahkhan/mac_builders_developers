import { Button } from "@mui/material";
import React from "react";

const Tabs = (props) => {
  const { selectedTab } = props;
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Button
        variant={selectedTab === "ALL" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "ALL")}
        size="large"
        color={selectedTab === "ALL" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>All Images</b>
      </Button>
      <Button
        variant={selectedTab === "SARA_BRIDGE_VIEW" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "SARA_BRIDGE_VIEW")}
        size="large"
        color={selectedTab === "SARA_BRIDGE_VIEW" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>Sara Bridge View</b>
      </Button>
      <Button
        variant={selectedTab === "NK_BRIDGE_VIEW" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "NK_BRIDGE_VIEW")}
        size="large"
        color={selectedTab === "NK_BRIDGE_VIEW" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>NK Bridge View</b>
      </Button>
      <Button
        variant={selectedTab === "SARA_BLESSING" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "SARA_BLESSING")}
        size="large"
        color={selectedTab === "SARA_BLESSING" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>Sara Blessing</b>
      </Button>
      <Button
        variant={selectedTab === "NK_RESIDENCY" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "NK_RESIDENCY")}
        size="large"
        color={selectedTab === "NK_RESIDENCY" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>NK RESIDENCY</b>
      </Button>
      <Button
        variant={selectedTab === "SARA_RESIDENCY" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "SARA_RESIDENCY")}
        size="large"
        color={selectedTab === "SARA_RESIDENCY" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>Sara Residency</b>
      </Button>
      <Button
        variant={selectedTab === "NK_ICON" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "NK_ICON")}
        size="large"
        color={selectedTab === "NK_ICON" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>NK Icon</b>
      </Button>
      <Button
        variant={selectedTab === "UROOJ_ARCADE" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "UROOJ_ARCADE")}
        size="large"
        color={selectedTab === "UROOJ_ARCADE" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>Urooj Arcade</b>
      </Button>
      <Button
        variant={selectedTab === "ZOHRA_RESIDENCY" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "ZOHRA_RESIDENCY")}
        size="large"
        color={selectedTab === "ZOHRA_RESIDENCY" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>Zohra Residency</b>
      </Button>
      <Button
        variant={selectedTab === "AL_MUSTAFA_PRIME" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "AL_MUSTAFA_PRIME")}
        size="large"
        color={selectedTab === "AL_MUSTAFA_PRIME" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>Al Mustafa Prime</b>
      </Button>
      <Button
        variant={selectedTab === "ABBAS_COMFORT" ? "contained" : "outlined"}
        style={{ fontSize: "14px" }}
        onClick={() => props.handleClick("selectedTab", "ABBAS_COMFORT")}
        size="large"
        color={selectedTab === "ABBAS_COMFORT" ? "primary" : "secondary"}
        className="m-2"
      >
        <b>Abbas Comfort</b>
      </Button>
    </div>
  );
};

export default Tabs;

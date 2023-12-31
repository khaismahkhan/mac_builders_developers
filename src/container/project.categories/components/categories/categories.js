import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../project.categories.scss";
import ImagePreviewDialog from "../image.preview.dialog/image.preview.dialog";
import clsx from "clsx";
import {
  IsMobileWidth,
  IsTabletWidth,
} from "../../../../components/common/utill/utils";

const Categories = (props) => {
  const { project } = useParams();
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const projectName = project.replace(/_/g, " ");
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
    star,
    allocation,
    yearly,
    ya,
    ma,
    image,
    halfYearly,
    hya
  } = props;

  const [state, setState] = useState({
    previewDialog: false,
  });

  const onClosePreviewDialog = () => {
    setState({
      ...state,
      previewDialog: false,
    });
  };

  const previewDialogOpen = () => {
    setState({
      ...state,
      previewDialog: true,
    });
  };

  return (
    <div
      data-aos="zoom-in-up"
      className={clsx(
        !mobileWidth &&
          !tabletWidth &&
          (reverse ? "d-flex w-100 flex-row-reverse" : "d-flex w-100 flex-row"),
        (mobileWidth || tabletWidth) &&
          "d-flex w-100 flex-wrap flex-column-reverse pr-3"
      )}
    >
      <ImagePreviewDialog
        {...state}
        {...props}
        open={state.previewDialog}
        onClose={onClosePreviewDialog}
        src={image}
        type={type}
        bed={bed}
      />
      <div
        className={clsx(
          !mobileWidth && !tabletWidth && "w-50 leftBox box m-2 paper-root",
          (mobileWidth || tabletWidth) && "w-100 leftBox box m-2 paper-root"
        )}
      >
        <div className="d-flex flex-column justify-content-between center align-items-center h-100 p-3 payment">
          <div className={clsx(mobileWidth && "pb-2")}>
            <Typography
              variant="h4"
              className="font-weight-bold"
              color="secondary"
            >
              Payment Schedule
            </Typography>
          </div>
          <div
            className={clsx(
              !mobileWidth && !tabletWidth && "text-center w-100",
              (mobileWidth || tabletWidth) && "text-center w-100"
            )}
          >
            <div className="d-flex justify-content-between m-1">
              <Typography
                variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                color="secondary"
              >
                {project === "NK_RESIDENCY" || project === "SARA_RESIDENCY"
                  ? "On Booking 40%"
                  : "On Booking 25%"}
              </Typography>
              <Typography
                variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                color="secondary"
              >
                Rs. {booking}/=
              </Typography>
            </div>
            {allocation && (
              <div className="d-flex justify-content-between m-1">
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  On Allocation 10%
                </Typography>
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  Rs. {allocation}/=
                </Typography>
              </div>
            )}
            {star && (
              <div className="d-flex justify-content-between m-1">
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  On Star of Working 10%
                </Typography>
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  Rs. {star}/=
                </Typography>
              </div>
            )}
            <div className="d-flex justify-content-between m-1">
              <Typography
                variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                color="secondary"
              >
                Monthly {mobileWidth ? "Inst." : "Installment"}
                {project === "NK_RESIDENCY"
                  ? " 15 x 400,000"
                  : project === "SARA_RESIDENCY"
                  ? " 18 x 1,000,000"
                  : ` 42 x ${ma}`}
              </Typography>
              <Typography
                variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                color="secondary"
              >
                Rs. {monthly}/=
              </Typography>
            </div>
            {halfYearly && (
              <div className="d-flex justify-content-between m-1">
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  Half Yearly {mobileWidth ? "Inst." : "Installment"}
                  {project === "SARA_BRIDGE_VIEW"
                    ? ` 07 x ${hya}`
                    : " 03 x 1,500,000"}
                </Typography>
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  Rs. {halfYearly}/=
                </Typography>
              </div>
            )}
            {quarterly && (
              <div className="d-flex justify-content-between m-1">
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  Quarterly {mobileWidth ? "Inst." : "Installment"} 05 x 500,000
                </Typography>
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  Rs. {quarterly}/=
                </Typography>
              </div>
            )}
            {yearly && (
              <div className="d-flex justify-content-between m-1">
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  Yearly {mobileWidth ? "Inst." : "Installment"} 06 x {ya}
                </Typography>
                <Typography
                  variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                  color="secondary"
                >
                  Rs. {yearly}/=
                </Typography>
              </div>
            )}
            <div className="d-flex justify-content-between m-1">
              <Typography
                variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                color="secondary"
              >
                On Possession
              </Typography>
              <Typography
                variant={mobileWidth || tabletWidth ? "caption" : "h6"}
                color="secondary"
              >
                Rs. {possession}/=
              </Typography>
            </div>
          </div>
          <div className={clsx(mobileWidth && "pt-3")}>
            <Button
              onClick={() => props.handleClick(type)}
              className="font-weight-bold"
              color="primary"
              data-aos="flip-left"
            >
              For More Details
            </Button>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          !mobileWidth && !tabletWidth && "w-50 rightBox box m-2 paper-root",
          (mobileWidth || tabletWidth) && "w-100 rightBox box m-2 paper-root"
        )}
        style={{ background: bg }}
      >
        <div className="d-flex flex-column justify-content-between center align-items-center h-100 p-3">
          <div
            className={clsx(
              !mobileWidth && "d-flex justify-content-start w-100",
              mobileWidth && "d-flex justify-content-start w-100 pb-4"
            )}
          >
            <Typography variant="h6" className="font-weight-bold">
              {projectName}
            </Typography>
          </div>
          <div className="text-center">
            <Typography variant="h2" className="font-weight-bold">
              TYPE <span style={{ color: "#fbeb23" }}>{type}</span>
            </Typography>
            <Typography variant="h3" className="font-weight-bold">
              {bed}
            </Typography>
            <Button
              onClick={previewDialogOpen}
              className="font-weight-bold mt-2"
              color="primary"
              variant="outlined"
              style={{ color: "white", border: "1px solid white" }}
              data-aos="flip-left"
            >
              View Image
            </Button>
          </div>
          <div
            className={clsx(
              !mobileWidth && "d-flex justify-content-end w-100",
              mobileWidth && "d-flex justify-content-end w-100 pt-4"
            )}
          >
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

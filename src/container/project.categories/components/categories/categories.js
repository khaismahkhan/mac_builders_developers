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
        (!mobileWidth || !tabletWidth) &&
          (reverse ? "d-flex w-100 flex-row-reverse" : "d-flex w-100 flex-row"),
        (mobileWidth || tabletWidth) && "d-flex w-100 flex-wrap"
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
          (!mobileWidth || !tabletWidth) && "w-50 leftBox box m-2 paper-root",
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
              (!mobileWidth || !tabletWidth) && "text-center w-100",
              (mobileWidth || tabletWidth) && "text-center w-100"
            )}
          >
            <div className="d-flex justify-content-between m-1">
              <Typography
                variant={clsx(
                  (!mobileWidth || !tabletWidth) && "h6",
                  (mobileWidth || tabletWidth) && "caption"
                )}
                color="secondary"
              >
                {project === "NK_RESIDENCY"
                  ? "On Booking 40%"
                  : "On Booking 10%"}
              </Typography>
              <Typography
                variant={clsx(
                  (!mobileWidth || !tabletWidth) && "h6",
                  (mobileWidth || tabletWidth) && "caption"
                )}
                color="secondary"
              >
                Rs. {booking}/=
              </Typography>
            </div>
            {allocation && (
              <div className="d-flex justify-content-between m-1">
                <Typography
                  variant={clsx(
                    (!mobileWidth || !tabletWidth) && "h6",
                    (mobileWidth || tabletWidth) && "caption"
                  )}
                  color="secondary"
                >
                  On Allocation 10%
                </Typography>
                <Typography
                  variant={clsx(
                    (!mobileWidth || !tabletWidth) && "h6",
                    (mobileWidth || tabletWidth) && "caption"
                  )}
                  color="secondary"
                >
                  Rs. {allocation}/=
                </Typography>
              </div>
            )}
            {star && (
              <div className="d-flex justify-content-between m-1">
                <Typography
                  variant={clsx(
                    (!mobileWidth || !tabletWidth) && "h6",
                    (mobileWidth || tabletWidth) && "caption"
                  )}
                  color="secondary"
                >
                  On Star of Working 10%
                </Typography>
                <Typography
                  variant={clsx(
                    (!mobileWidth || !tabletWidth) && "h6",
                    (mobileWidth || tabletWidth) && "caption"
                  )}
                  color="secondary"
                >
                  Rs. {star}/=
                </Typography>
              </div>
            )}
            <div className="d-flex justify-content-between m-1">
              <Typography
                variant={clsx(
                  (!mobileWidth || !tabletWidth) && "h6",
                  (mobileWidth || tabletWidth) && "caption"
                )}
                color="secondary"
              >
                Monthly Installment
                {project === "NK_RESIDENCY" ? " 15 X 400,000" : ` 36 X ${ma}`}
              </Typography>
              <Typography
                variant={clsx(
                  (!mobileWidth || !tabletWidth) && "h6",
                  (mobileWidth || tabletWidth) && "caption"
                )}
                color="secondary"
              >
                Rs. {monthly}/=
              </Typography>
            </div>
            {quarterly && (
              <div className="d-flex justify-content-between m-1">
                <Typography
                  variant={clsx(
                    (!mobileWidth || !tabletWidth) && "h6",
                    (mobileWidth || tabletWidth) && "caption"
                  )}
                  color="secondary"
                >
                  Quarterly Installment 05 X 500,000
                </Typography>
                <Typography
                  variant={clsx(
                    (!mobileWidth || !tabletWidth) && "h6",
                    (mobileWidth || tabletWidth) && "caption"
                  )}
                  color="secondary"
                >
                  Rs. {quarterly}/=
                </Typography>
              </div>
            )}
            {yearly && (
              <div className="d-flex justify-content-between m-1">
                <Typography
                  variant={clsx(
                    (!mobileWidth || !tabletWidth) && "h6",
                    (mobileWidth || tabletWidth) && "caption"
                  )}
                  color="secondary"
                >
                  Yearly Installment 06 X {ya}
                </Typography>
                <Typography
                  variant={clsx(
                    (!mobileWidth || !tabletWidth) && "h6",
                    (mobileWidth || tabletWidth) && "caption"
                  )}
                  color="secondary"
                >
                  Rs. {yearly}/=
                </Typography>
              </div>
            )}
            <div className="d-flex justify-content-between m-1">
              <Typography
                variant={clsx(
                  (!mobileWidth || !tabletWidth) && "h6",
                  (mobileWidth || tabletWidth) && "caption"
                )}
                color="secondary"
              >
                On Possession
              </Typography>
              <Typography
                variant={clsx(
                  (!mobileWidth || !tabletWidth) && "h6",
                  (mobileWidth || tabletWidth) && "caption"
                )}
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
          (!mobileWidth || !tabletWidth) && "w-50 rightBox box m-2 paper-root",
          (mobileWidth || tabletWidth) && "w-100 rightBox box m-2 paper-root"
        )}
        style={{ background: bg }}
      >
        <div className="d-flex flex-column justify-content-between center align-items-center h-100 p-3">
          <div></div>
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

import React from "react";
import clsx from "clsx";
import { CircularProgress, Button } from "@mui/material";

export default function LoaderButton(props) {
  const {
    variant,
    color,
    loading,
    loaderPosition,
    size,
    classNames,
    disabled,
    borderRadius,
  } = props;
  const buttonPositionCLassName = clsx("d-flex", {
    "flex-column flex-column-reverse": loaderPosition === "top",
    "flex-column": loaderPosition === "bottom",
    "": loaderPosition === "right",
    "flex-row-reverse": loaderPosition === "left",
  });
  return (
    <Button
      style={borderRadius ? { borderRadius: 100, textTransform: "unset" } : {}}
      variant={variant ? variant : "contained"}
      color={color ? color : "primary"}
      className={classNames}
      disabled={loading || disabled}
      onClick={props.onClick}
      size={size ? size : "medium"}
      fullWidth={true}
    >
      <div className={buttonPositionCLassName}>
        <div className="d-flex justify-content-center align-items-center">
          {props.children}
        </div>
        {loading && (
          <div className="p-1 pl-4 d-flex justify-content-center align-items-center">
            <CircularProgress size={20} />
          </div>
        )}
      </div>
    </Button>
  );
}
{
  /* <LoaderButton
fullWidth
onClick={login}
variant="contained"
color="primary"
classNames="mt-3"
loading={execStatus.status === "PENDING" ? true : false}
// loaderPosition="top"
>
Login
</LoaderButton> */
}
//props
//variant                       //default contained                     //contained , outlined , default
//color                         //default primary                       //primary , secondary
//onclick
//children
//loaderPosition                //default center                        //left right center
//onClick                                                               //callBack
//loading                      //default false                          //true / false
//success                      //default false                          //true / false
//loaderSize                   //default 30                             number

import React from "react";
import "./input.field.scss";
import clsx from "clsx";
import { OutlinedInput, Typography } from "@mui/material";

const InputField = (props) => {
  const { placeholder, value, onChange, topAdornment, name, startAdornment, type,endAdornment} =
    props;
  return (
    <div id="input-field">
      {topAdornment ? (
        <Typography className={clsx("pt-2 fw-bolder text-theme")}>
          <label for="exampleInputEmail1" class="form-label d-flex">
            {topAdornment}
          </label>
        </Typography>
      ) : (
        ""
      )}
      <OutlinedInput
        className="w-100 paper-root bg-white text-theme"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        startAdornment={startAdornment}
        type={type}
        endAdornment={endAdornment}
        // onClick={onClick}
      />
    </div>
  );
};

export default InputField;

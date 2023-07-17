import './site.label.textfield.scss'
import React, { useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { useStyles } from './site.label.textfield.style';
import clsx from 'clsx';
import { regex } from '../utill/regex'
import { Typography, Paper, InputAdornment, CircularProgress, TextField } from "@mui/material";


export default function SiteLabelTextField(props) {
  const { maxLength, pattern, endAdornment, label, execStatus, error, maskChar, value, mask, placeholder, validationType, topAdornment, type, required, borderRadius, isValid, validationResult, id,multiline, rows,isAmount } = props
  const classes = useStyles()

  const [errorState, setError] = useState(false)

  useEffect(() => {
    setError(error)
  }, [error, validationResult])

  const onChange = (event) => {
    if (validationType === "ALPHANUMERIC_WITH_DASH") {
      if (regex.alphanumericWithDash.test(event.target.value) || event.target.value === "") {
        setError(false)
        props.onChange(event)
      }
    }
    else if (validationType === "ALPHANUMERIC") {
      if (regex.alphanumericWithOutSpaceTextField.test(event.target.value) || event.target.value === "") {
        setError(false)
        props.onChange(event)
      }
    }
    else if(validationType === "CHARACTER"){
      if (regex.englishAndFinnishCharacters.test(event.target.value) || event.target.value === "") {
        setError(false)
        props.onChange(event)
      }
    }
    else if (validationType === "ALPHANUMERIC_WITH_SPACE") {
      if (regex.alphanumericWithSpace.test(event.target.value) || event.target.value === "") {
        setError(false)
        props.onChange(event)
      }
    }
    else if (validationType === "NUMERIC" && !isAmount) {
      if (regex.wholeNumber.test(event.target.value) || event.target.value === "") {
        setError(false)
        props.onChange(event)
      }
    }
    else if (validationType === "FLOAT") {
      if (regex.decimalNumber.test(event.target.value) || event.target.value === "") {
        setError(false)
        props.onChange(event)
      }
    }
    else if (type === "EMAIL") {
      if (regex.email.test(event.target.value)) {
        setError(false)
      }
    }
    else {
      setError(false)
      props.onChange(event)
    }
  }

  return (
    <React.Fragment>
      {
        topAdornment ? <div className="pb-1 font-weight-bold">{topAdornment}</div> : null
      }
      {
        mask && !props.disabled ?
          <ReactInputMask mask={mask} maskChar={maskChar} placeholder={placeholder} onChange={onChange} alwaysShowMask={false} value={value} >

            {inputProps => (
              <Paper elevation={1} className={clsx(classes.paperRoot, "paper-root  w-100")} >
                {
                  execStatus && execStatus.status === "PENDING" ?
                    <div><CircularProgress size={50} className="p-3" /></div> :
                    <TextField
                      {...inputProps}
                      label={null}
                      id={id}
                      disabled={props.disabled ? props.disabled : null}
                      variant="outlined"
                      type={type}
                      autoComplete='new-password'
                      inputProps={{
                        maxLength: maxLength,
                        pattern: pattern,
                      }}

                      InputProps={{
                        classes: {
                          inputAdornedEnd: classes.endAdn,
                          notchedOutline: classes.noBorder,
                          input: classes.input,
                          disabled: classes.disabled
                        },
                        type: type,
                        startAdornment: (
                          <InputAdornment
                            color="primary"
                            className="h-100"
                            position="start"
                          >

                            <div className={`${props.disabled ? "text-muted" : classes.textColor} font-weight-bolder width-max-content d-flex`}>
                              {label}
                              {
                                required ? <b className="text-danger pl-1">*</b> : null
                              }
                            </div>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment className="h-100" position="end">
                            {endAdornment ? (
                              endAdornment
                            ) : null
                            }
                          </InputAdornment>
                        ),
                      }}
                    />
                }
              </Paper>
            )}
          </ReactInputMask>
          :
          <Paper elevation={1} className={clsx(classes.paperRoot, "paper-root border-radius-10 w-100")} >
            {
              <div className="d-flex align-items-center w-100">
                {
                  execStatus && execStatus.status === "PENDING" ?
                    <div className="pr-4"><CircularProgress size={45} className="p-3" /></div>
                    : null
                }
                <div className="flex-grow-1">
                  {

                    <TextField
                      id={id}
                      onBlur={props.onBlur}
                      onClick={props.onClick}
                      type={type}
                      value={value}
                      placeholder={placeholder}
                      label={null}
                      disabled={props.disabled ? props.disabled : null}
                      multiline={multiline ? multiline : false}
                      rowsMax={rows}
                      variant="outlined"
                      autoComplete='new-password'
                      inputProps={{
                        maxLength: maxLength,
                        pattern: pattern,

                      }}
                      onChange={onChange}
                      InputProps={{
                        classes: {
                          inputAdornedEnd: classes.endAdn,
                          //inputAdornedStart: classes.paddingLeft,
                          notchedOutline: classes.noBorder,
                          input: classes.input,
                          disabled: classes.disabled
                        },
                        startAdornment: (
                          <InputAdornment
                            color="primary"
                            className="h-100"
                            position="start"
                          >
                            <div className={`${props.disabled ? "text-muted" : classes.textColor} font-weight-bolder d-flex`}>

                              {label}
                              {
                                required ? <b className="text-danger pl-1">*</b> : null
                              }
                            </div>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment className="h-100" position="end">
                            {endAdornment ? (
                              endAdornment
                            ) : null
                            }
                          </InputAdornment>
                        ),
                      }}
                    />
                  }
                </div>
              </div>
            }
          </Paper>
      }
      <div className="">
        {
          errorState ?
            <div className="text-danger p-2">
              {errorState}
            </div> : null
        }

      </div>

    </React.Fragment>
  );
};

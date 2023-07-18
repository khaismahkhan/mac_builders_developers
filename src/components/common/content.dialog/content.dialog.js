import './content.dialog.scss'
import React from 'react';
import { useStyles } from './content.dialog.style'
import { CircularProgress, Dialog, DialogTitle, Icon, Typography, Button,DialogActions } from '@mui/material'

export default function ContentDialog(props) {
  const { title, showActions, successText, maxWidth, cancelText, execStatus, disabled,bg, disableBackdropClick,disableMinHight,headerStyles } = props;
  const classes = useStyles()

  return (
    <Dialog
      open={props.dialogIsOpen}
      onClose={props.onClose}
      PaperProps={{
        className: 'dialog-paper',
      }}
      disableBackdropClick={disableBackdropClick}
      maxWidth={maxWidth ? maxWidth : "sm"}
      fullWidth
    >
      <div id="content-dialog" className="pb-3">
        <DialogTitle className={headerStyles}>
          <div className="d-flex justify-content-between align-items-center">
            <Typography className={headerStyles} variant="h6">

            {title}
            </Typography>
            <div
              onClick={props.onClose}
              className={`${classes.closeIcon} d-flex align-items-center justify-content-center ${bg? bg : 'bg-danger-2'}`}
            >
              <Icon>close_icon</Icon>
            </div>
          </div>
        </DialogTitle>
        <div className={`${disableMinHight ? null : 'content'}`}>{props.children}</div>
      </div>
      {
        showActions ?
          <DialogActions className="p-4">
            {
              cancelText ?
                <Button onClick={props.onCancelPress} color="secondary">
                  {cancelText}
                </Button> : null
            }
            {
              execStatus && execStatus.status === "PENDING" ?
                <CircularProgress size={30} /> :
                <Button type="submit"
                  disabled={disabled}
                  onClick={props.onSuccess}
                  color="secondary">
                  {successText}
                </Button>
            }
          </DialogActions> : null
      }

    </Dialog>
  )
}

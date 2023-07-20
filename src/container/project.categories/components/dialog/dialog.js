import React from "react";
import SiteLabelTextField from "../../../../components/common/site.label.textfield/site.label.textfield";
import ContentDialog from "../../../../components/common/content.dialog/content.dialog";
import LoaderButton from "../../../../components/common/loader.button/loader.button";

const Dialog = (props) => {
  const { title, open, project, plan, name, email, phone, loading } = props;

  return (
    <div>
      <ContentDialog
        title={<b>{title ? title : "Add Details"}</b>}
        onClose={props.onClose}
        dialogIsOpen={open}
      >
        <div className="p-4" style={{ height: "60vh" }}>
          <div className="">
            <SiteLabelTextField
              onChange={(event) =>
                props.handleChange("project", event.target.value)
              }
              value={project}
              topAdornment="Project"
              placeholder="Type Project"
              disabled
            />
          </div>
          <div className="pt-4">
            <SiteLabelTextField
              onChange={(event) =>
                props.handleChange("plan", event.target.value)
              }
              value={plan}
              topAdornment="Project Plan"
              placeholder="Type Plan"
              disabled
            />
          </div>
          <div className="pt-4">
            <SiteLabelTextField
              onChange={(event) =>
                props.handleChange("name", event.target.value)
              }
              value={name}
              topAdornment="Name"
              placeholder="Type name"
            />
          </div>
          <div className="pt-4">
            <SiteLabelTextField
              onChange={(event) =>
                props.handleChange("email", event.target.value)
              }
              value={email}
              topAdornment="Enter Email"
              placeholder="Type Email Address"
            />
          </div>
          <div className="pt-4">
            <SiteLabelTextField
              onChange={(event) =>
                props.handleChange("phone", event.target.value)
              }
              value={phone}
              topAdornment="Enter Phone Number"
              placeholder="Type phone number"
            />
          </div>

          <div className="pt-4 d-flex  justify-content-end text-right">
            <div className="w-40">
              <LoaderButton
                fullWidth
                loading={loading}
                type="submit"
                variant="contained"
                color="primary"
                onClick={props.handleSubmit}
                className="font-weight-bold"
              >
                SUBMIT
              </LoaderButton>
            </div>
          </div>
        </div>
      </ContentDialog>
    </div>
  );
};

export default Dialog;

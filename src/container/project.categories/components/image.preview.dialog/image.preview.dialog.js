import React, { useState } from "react";
import ContentDialog from "../../../../components/common/content.dialog/content.dialog";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function ImagePreviewDialog(props) {
  const { title, src, open } = props;

  return (
    <div>
      <ContentDialog
        title={
          <b>
            {props.type} ({props.bed}) IMAGE
          </b>
        }
        onClose={props.onClose}
        dialogIsOpen={open}
        fullWidth
        disableMinHight
      >
        <div className="p-4" style={{}}>
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {({ zoomIn, zoomOut, resetTransform, centerView, ...rest }) => (
              <React.Fragment>
                <div className="d-flex justify-content-center flex-wrap mb-2">
                  <button
                    style={{
                      color: "#A9C585",
                      textTransform: "unset",
                      border: "none",
                      background: "white",
                      borderRadius: 5,
                      fontSize: 16,
                    }}
                    className="pt-2 pb-2 m-2 paper-root"
                    onClick={() => zoomIn()}
                  >
                    <div className="d-flex align-items-center pl-2 pr-2">
                      <div className="font-weight-bold">Zoom In</div>
                      <div>
                        <i
                          class="fas fa-plus"
                          style={{ color: "#A9C585", paddingLeft: 6 }}
                        ></i>
                      </div>
                    </div>
                  </button>
                  <button
                    style={{
                      color: "#02B7B4",
                      textTransform: "unset",
                      border: "none",
                      background: "white",
                      borderRadius: 5,
                      fontSize: 16,
                    }}
                    className="pt-2 pb-2 m-2 paper-root"
                    onClick={() => zoomOut()}
                  >
                    <div className="d-flex align-items-center pl-2 pr-2">
                      <div className="font-weight-bold">Zoom Out</div>
                      <div>
                        <i
                          class="fas fa-minus"
                          style={{ color: "#02B7B4", paddingLeft: 6 }}
                        ></i>
                      </div>
                    </div>
                  </button>
                  <button
                    style={{
                      color: "#dd3421",
                      textTransform: "unset",
                      border: "none",
                      background: "white",
                      borderRadius: 5,
                      fontSize: 16,
                    }}
                    className="pt-2 pb-2 m-2 paper-root"
                    onClick={() => centerView()}
                  >
                    <div className="d-flex align-items-center pl-2 pr-2">
                      <div className="font-weight-bold">Center</div>
                      <div>
                        <i
                          // <FontAwesomeIcon icon="fa-solid fa-" />
                          class="fas fa-eye"
                          style={{ color: "#dd3421", paddingLeft: 6 }}
                        ></i>
                      </div>
                    </div>
                  </button>
                  <button
                    style={{
                      color: "#033044",
                      textTransform: "unset",
                      border: "2px solid 033044",
                      background: "white",
                      borderRadius: 5,
                      fontSize: 16,
                    }}
                    className="pt-2 pb-2 m-2 paper-root"
                    onClick={() => resetTransform()}
                  >
                    <div className="d-flex align-items-center pl-2 pr-2">
                      <div className="font-weight-bold">Reset</div>
                    </div>
                  </button>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <TransformComponent>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/${props.src}`}
                      style={{
                        // width: "700px",
                        height: "50vh",
                        objectFit: "contain",
                      }}
                      className=""
                      alt="test"
                    />
                  </TransformComponent>
                </div>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </ContentDialog>
    </div>
  );
}

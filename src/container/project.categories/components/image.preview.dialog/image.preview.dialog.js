import React, { useState } from "react";
import ContentDialog from "../../../../components/common/content.dialog/content.dialog";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function ImagePreviewDialog(props) {
  const { title, src, open } = props;

  return (
    <div>
      <ContentDialog
        title={<b>Preview Image</b>}
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
                <div className="d-flex justify-content-center mb-2 mt-2">
                  <button
                    className="cursor-pointer text-light rounded p-1 bg-primary border-rounded"
                    onClick={() => zoomIn()}
                  >
                    Zoom In (+)
                  </button>
                  <button
                    className="cursor-pointer text-light rounded p-1 ml-1 bg-warning border-rounded"
                    onClick={() => zoomOut()}
                  >
                    Zoom Out (-)
                  </button>
                  <button
                    className="cursor-pointer text-light rounded p-1 ml-1 bg-danger-2 border-rounded"
                    onClick={() => centerView()}
                  >
                    Center
                  </button>
                  <button
                    className="cursor-pointer text-light rounded p-1 ml-1 bg-danger-2 border-rounded"
                    onClick={() => resetTransform()}
                  >
                    Reset
                  </button>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <TransformComponent>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/mustafa1.jpeg`}
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

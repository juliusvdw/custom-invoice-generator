import React from "react";

const templateSection = () => {
  return (
    <>
      <h2>Choose a template</h2>
      <div
        className="templates-container width-100 "
        style={templatesContainerStyle}
      >
        <div className="row">
          <div className="col-lg-4">
            <div className="template-image-container" style={imageStyle}>
              {" "}
              Test
            </div>
          </div>
          <div className="col-lg-4">
            <div className="template-image-container" style={imageStyle}>
              {" "}
              Test
            </div>
          </div>
          <div className="col-lg-4">
            <div className="template-image-container" style={imageStyle}>
              {" "}
              Test
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const templatesContainerStyle = {
  paddingTop: "40px",
};
const imageStyle = {
  width: "350px",
  height: "500px",
  border: "1px solid rgb(210,210,210)",
  borderRadius: "15px",
};

export default templateSection;

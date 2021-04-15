import React from "react";
import { Link } from "react-scroll";

const templateSection = () => {
  return (
    <>
      <h2>Choose a template</h2>
      <div
        className="templates-container width-100 "
        style={templatesContainerStyle}
      >
        <div className="row">
          <Link to="form-section" smooth={true} duration={800}>
            <div className="col-lg-4">
              <div className="template-image-container" style={imageStyle}>
                {" "}
                <img className="img-fluid" src="invoicetest.png"></img>
              </div>
            </div>
          </Link>
          <Link to="form-section" smooth={true} duration={800}>
            <div className="col-lg-4">
              <div className="template-image-container" style={imageStyle}>
                {" "}
                <img className="img-fluid" src="invoicetest2.png"></img>
              </div>
            </div>
          </Link>
          <Link to="form-section" smooth={true} duration={800}>
            <div className="col-lg-4">
              <div className="template-image-container" style={imageStyle}>
                {" "}
                <img className="img-fluid" src="invoicetest3.png"></img>
              </div>
            </div>
          </Link>
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

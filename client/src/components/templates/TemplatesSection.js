import React, { useContext } from "react";
import Template from "./Template";

const TemplateSection = () => {
  return (
    <>
      <h2 style = {headingStyle}>Choose a template</h2>
      <div
        className="templates-container width-100 "
      >
        <div className="row">
          <div className = 'col-lg-4 col-md-4 col-sm-4'>
          <Template src={"invoicetest.png"} id={"invoice1"} />

          </div>
          <div className = 'col-lg-4 col-md-4 col-sm-4'>
          <Template src={"invoicetest2.png"} id={"invoice2"} />

          </div>
          <div className = 'col-lg-4 col-md-4 col-sm-4'>
          <Template src={"invoicetest3.png"} id={"invoice3"} />

          </div>
        </div>
      </div>
    </>
  );
};

const headingStyle = {
  marginBottom:'50px'
}
const imageStyle = {
  width: "350px",
  height: "500px",
  border: "1px solid rgb(210,210,210)",
  borderRadius: "15px",
};

export default TemplateSection;

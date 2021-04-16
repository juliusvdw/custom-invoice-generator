import React from "react";
import { Link } from "react-scroll";
import Template from "./Template";

const templateSection = () => {
  return (
    <>
      <h2>Choose a template</h2>
      <div
        className="templates-container width-100 "
        style={templatesContainerStyle}
      >
        <div className="row">
          <Template src={"invoicetest.png"} />
          <Template src={"invoicetest2.png"} />
          <Template src={"invoicetest3.png"} />
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

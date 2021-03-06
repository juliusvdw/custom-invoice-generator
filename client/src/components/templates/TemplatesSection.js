import React, { useContext } from "react";
import Template from "./Template";

const TemplateSection = () => {
  return (
    <>
      <h2>Choose a template</h2>
      <div
        className="templates-container width-100 "
        style={templatesContainerStyle}
      >
        <div className="row">
          <Template src={"invoicetest.png"} id={"invoice1"} />
          <Template src={"invoicetest2.png"} id={"invoice2"} />
          <Template src={"invoicetest3.png"} id={"invoice3"} />
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

export default TemplateSection;

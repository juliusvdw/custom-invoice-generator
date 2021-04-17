import React from "react";
import { Link } from "react-scroll";
import Template from "./Template";

const templateSection = () => {
  // Handle select template
  // const selectTemplate = (id) => {
  //   setSelected(id);
  // };

  return (
    <>
      <h2>Choose a template</h2>
      <div
        className="templates-container width-100 "
        style={templatesContainerStyle}
      >
        <div className="row">
          <Template
            src={"invoicetest.png"}
            id={"invoice1"}
            onClick={selectTemplate("invoice1")}
          />
          <Template
            src={"invoicetest2.png"}
            id={"invoice2"}
            onClick={selectTemplate("invoice2")}
          />
          <Template
            src={"invoicetest3.png"}
            id={"invoice3"}
            onClick={selectTemplate("invoice3")}
          />
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

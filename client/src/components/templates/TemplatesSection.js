import React, { useContext } from "react";
import FormContext from "../../context/form/formContext";
import Template from "./Template";

const TemplateSection = () => {
  //Access for context
  const formContext = useContext(FormContext);
  //Destructure whats needed from form context
  const { selectTemplate } = formContext;

  //Handle select template
  const handleSelect = (id) => {
    selectTemplate(id);
  };

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
            onClick={() => handleSelect("invoice1")}
          />
          <Template
            src={"invoicetest2.png"}
            id={"invoice2"}
            onClick={() => handleSelect("invoice1")}
          />
          <Template
            src={"invoicetest3.png"}
            id={"invoice3"}
            onClick={() => handleSelect("invoice1")}
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

export default TemplateSection;

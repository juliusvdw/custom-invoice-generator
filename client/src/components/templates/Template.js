import React, { useContext } from "react";
import FormContext from "../../context/form/formContext";
import { Link } from "react-scroll";

const Template = ({ src, id }) => {
  //Access form context
  const formContext = useContext(FormContext);
  //Destructure what is needed from formcontext
  const { selectedTemplate, selectTemplate } = formContext;

  //Handle select template
  const handleSelect = (id) => {
    selectTemplate(id);
  };

  return (
    <Link to="form-section" smooth={true} duration={800}>
        <div
          className="template-image-container"
          style={selectedTemplate === id ? selectedImageStyle : imageStyle}
        >
          {" "}
          <img
            className="img-fluid"
            src={src}
            style={{ maxHeight: "100%" }}
          ></img>
        </div>
    </Link>
  );
};

const imageStyle = {
  maxWidth: "350px",
  maxHeight: "500px",
  border: "1px solid rgb(210,210,210)",
  borderRadius: "5px",
};

const selectedImageStyle = {
  maxWidth: "350px",
  maxHeight: "500px",
  border: "1px solid #0275d8",
  borderRadius: "5px",
};

export default Template;

import React from "react";
import { Link } from "react-scroll";

const template = ({ src }) => {
  return (
    <Link to="form-section" smooth={true} duration={800}>
      <div className="col-lg-4">
        <div className="template-image-container" style={imageStyle}>
          {" "}
          <img className="img-fluid" src={src}></img>
        </div>
      </div>
    </Link>
  );
};

const imageStyle = {
  width: "350px",
  height: "500px",
  border: "1px solid rgb(210,210,210)",
  borderRadius: "15px",
};

export default template;

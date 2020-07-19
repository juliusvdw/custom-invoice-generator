import React from "react";

const Form = () => {
  return (
    <div className="jumbotron d-flex" style={jumboStyle}>
      <div className="col-lg-7 text-left">
        <h6>From</h6>
        <textarea
          className="form-control"
          placeholder="Your Company or Name&#10; Address"
          style={textAreaStyle}
        />
      </div>
      <div className="col-lg-4">Test</div>
    </div>
  );
};

const jumboStyle = {
  height: "60vh",
  marginTop: "5%",
};

const textAreaStyle = {
  minHeight: "120px",
  borderRadius: "7px",
};

export default Form;

import React from "react";

const Form = () => {
  return (
    <div className="jumbotron " style={jumboStyle}>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 text-left">
          <h6>From</h6>
          <textarea
            className="form-control"
            placeholder="Your Company/Name + Address"
            style={textAreaStyle}
          />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 offset-lg-1">
          <div
            className="jumbotron bg-warning mt-4 py-0 px-0"
            style={logoStyle}
          >
            <h6 style={{ paddingTop: "28%" }}>Your Logo Here</h6>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 text-left">
          <h6>Bill To</h6>
          <textarea
            className="form-control"
            placeholder="Your customer's billing address"
            style={textAreaStyle}
          />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 offset-lg-1 text-left">
          <h6>Invoice #</h6>
          <input
            type="text"
            placeholder="1"
            className="form-control"
            style={borderStyle}
          />
          <h6 className="pt-3">Invoice Date</h6>
          <input type="date" className="form-control" style={borderStyle} />
        </div>
      </div>
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

const logoStyle = {
  height: "120px",

  borderRadius: "7px",
};

const borderStyle = {
  borderRadius: "7p",
};

export default Form;

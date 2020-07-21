import React from "react";

const Form = () => {
  return (
    <>
      <div className="jumbotron " style={jumboStyle}>
        <form>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 text-left">
              <h6>From</h6>
              <textarea
                className="form-control "
                placeholder="Your Company/Name + Address"
                style={textAreaStyle}
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 offset-lg-1">
              <div
                className="jumbotron bg-warning mt-4 py-0 px-0"
                style={logoStyle}
              >
                <h6 style={{ paddingTop: "35px" }}>Your Logo Here</h6>
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

          <hr style={{ marginTop: "35px" }} />

          <div className="row">
            <div className="col-lg-6 text-left">
              <h6>Description</h6>
              <textarea
                className="form-control mt-3"
                style={descriptionStyle}
              />
            </div>
            <div className="col-lg-2 text-left">
              <h6>Amount</h6>
              <input
                type="number"
                className="form-control mt-3 "
                placeholder="0.0"
              />
            </div>
            <div className="col-lg-3 text-left">
              <h6>Tax</h6>
              <button className="btn btn-warning  mt-2 form-control">
                Add Tax
              </button>
            </div>
            <div className="col-lg-1 my-auto text-left">
              <h4 className="text-danger mt-3">X</h4>
            </div>
          </div>

          <button className="btn btn-warning form-control mt-3">
            Add New Item
          </button>
          <div className="row mt-4">
            <div className="col-lg-6 offset-lg-5 text-left ">
              <div className="d-flex">
                <h5>Subtotal</h5>
                <span className="ml-auto">
                  {" "}
                  <strong>3500</strong>
                </span>
              </div>
              <div className="d-flex" style={{ marginTop: "30px" }}>
                <h4>
                  TOTAL <a href="#">ZAR</a>
                </h4>
                <span className="ml-auto">
                  <strong>3500</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-8 col-md-8 col-sm-8 text-left">
              <h6>Terms and conditions</h6>
              <textarea
                className="form-control "
                placeholder="Any extra information to provide to customer"
                style={textAreaStyle}
              />
            </div>
          </div>
        </form>
      </div>
      <button
        type="submit"
        className="btn btn-warning form-control mt-3 mb-4"
        style={{ minHeight: "50px" }}
      >
        Download invoice PDF
      </button>
    </>
  );
};

const jumboStyle = {
  minHeight: "60vh",
  marginTop: "5%",
  backgroundColor: "#D2E7F4",
  padding: "25px",
  marginBottom: "5px",
};

const textAreaStyle = {
  minHeight: "120px",
  borderRadius: "7px",
};

const descriptionStyle = {
  minHeight: "40px",
  borderRadius: "7px",
};

const logoStyle = {
  height: "120px",

  borderRadius: "7px",
};

const borderStyle = {
  borderRadius: "7px",
};

export default Form;

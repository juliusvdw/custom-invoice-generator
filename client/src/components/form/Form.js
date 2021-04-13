import React, { useContext, useState } from "react";

//Bring in context
import FormContext from "../../context/form/formContext";

//Bring in components
import Item from "./Item";

const Form = () => {
  //Set up form state with useState
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [terms, setTerms] = useState("");

  const formContext = useContext(FormContext);

  const { sendData, addItem, items } = formContext;

  //Send form data to server for pdf generation
  const onSubmit = (e) => {
    e.preventDefault();

    //Create formData object to be sent to server
    const formData = {
      from,
      to,
      invoiceNo,
      invoiceDate,
      terms,
      items,
      total: total.toFixed(2),
      taxTotal: taxTotal.toFixed(2),
      subTotal: subTotal.toFixed(2),
    };
    console.log(formData);
    sendData(formData);
  };

  //Modify output for subtotal amount
  let subTotal = 0;
  items.forEach((item) => (subTotal += Number(item.amount)));

  //Modify output for taxTotal amount
  let taxTotal = 0;
  items.forEach(
    (item) => (taxTotal += Number(item.amount * Number(item.tax / 100)))
  );

  //Modify output for total amount
  let total = Number(subTotal + taxTotal);

  return (
    <>
      <form>
        <div className="jumbotron " style={jumboStyle}>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 text-left">
              <div className="d-flex">
                <i class="fas fa-user pl-2 pr-2 pt-1"></i>
                <h6>
                  <strong>From</strong>
                </h6>
              </div>

              <textarea
                className="form-control mt-2"
                placeholder="Your Company/Name + Address"
                style={textAreaStyle}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 offset-lg-1">
              <div className="jumbotron  mt-4 py-0 px-0" style={logoStyle}>
                <h6 style={{ paddingTop: "35px" }}>Your Logo Here</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 text-left">
              <div className="d-flex">
                <i className="fas fa-file-invoice pl-2 pr-2 pt-1"></i>
                <h6>
                  <strong>Bill To</strong>
                </h6>
              </div>
              <textarea
                className="form-control mt-2"
                placeholder="Your customer's billing address"
                style={textAreaStyle}
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 offset-lg-1 text-left">
              <h6>
                <strong>Invoice # </strong>
              </h6>
              <input
                type="text"
                placeholder="1"
                className="form-control"
                style={borderStyle}
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
              />
              <h6 className="pt-3">
                {" "}
                <strong>Invoice Date </strong>
              </h6>
              <input
                type="date"
                className="form-control"
                style={borderStyle}
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
          </div>

          <Item />

          <div
            className="btn btn-outline-primary form-control mt-3 w-90"
            onClick={() => addItem()}
          >
            Add New Item
          </div>

          <hr style={{ marginTop: "35px" }} />

          <div className="row mt-4">
            <div className="col-lg-6 offset-lg-5 text-left ">
              <div className="d-flex">
                <h5>
                  <strong>Subtotal</strong>
                </h5>
                <span className="ml-auto">
                  {" "}
                  <strong>{subTotal.toFixed(2)}</strong>
                </span>
              </div>
              {taxTotal > 0 && (
                <div className="d-flex mt-2">
                  <h5>
                    <strong>Tax</strong>
                  </h5>
                  <span className="ml-auto">
                    {" "}
                    <strong>{taxTotal.toFixed(2)}</strong>
                  </span>
                </div>
              )}
              <div className="d-flex" style={{ marginTop: "30px" }}>
                <h4>
                  <strong> TOTAL </strong> <a href="#">ZAR</a>
                </h4>
                <span className="ml-auto">
                  <strong>{total.toFixed(2)}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-8 col-md-8 col-sm-8 text-left">
              <div className="d-flex">
                <i className="fas fa-copy pl-2 pr-2 pt-1"></i>
                <h6>
                  <strong>Terms and Conditions</strong>
                </h6>
              </div>
              <textarea
                className="form-control "
                placeholder="Any extra information to provide to customer"
                style={textAreaStyle}
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success form-control mt-3 mb-4"
          style={{ minHeight: "50px" }}
          onClick={onSubmit}
        >
          Download invoice PDF
        </button>
      </form>
    </>
  );
};

//Create style Variables

const jumboStyle = {
  minHeight: "60vh",
  marginTop: "3%",
  backgroundColor: "#FFF",
  padding: "25px",
  marginBottom: "5px",
  border: "1px solid rgb(200,200,200)",
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
  backgroundColor: "#eeee",
  borderRadius: "7px",
};

const borderStyle = {
  borderRadius: "7px",
};

export default Form;

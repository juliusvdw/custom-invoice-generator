import React, { useEffect } from "react";

import Navbar from "../layout/Navbar";
import Form from "../form/Form";

const PdfPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h2 style={headingStyle}>
              <i className="fas fa-plus-circle pr-3"></i> New Invoice
            </h2>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-10 mx-auto">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

//Create style vars

const headingStyle = {
  marginTop: "12%",
};

export default PdfPage;

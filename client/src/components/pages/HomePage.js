import React from "react";
import { Link } from "react-scroll";

import Navbar from "../layout/Navbar";
import Form from "../form/Form";
import TemplatesSection from "../templates/TemplatesSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <div className="container " style={{ height: "100vh" }}>
          <div className=" text-center " id="main-left">
            <div className="container-fluid h-100" style={containerStyle}>
              <h2 className="heading" style={headingStyle}>
                <strong> Create elegant invoices within minutes </strong>
              </h2>
              <p style={pStyle} className="mt-3 mx-auto">
                Select one of our templates and create a stunning invoice within
                a matter of minutes. For free.
              </p>
              <Link to="templates-section" smooth={true} duration={800}>
                <btn
                  className="btn btn-outline-primary  btn-lg mt-4  "
                  style={btnStyle}
                >
                  Create Invoice
                </btn>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        id="templates-section"
        style={templatesContainerStyle}
      >
        <TemplatesSection />
      </div>

      <div className="container" id="form-container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h2 style={formHeadingStyle}>
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

const imageStyle = {
  height: "100%",
  width: "110%",
  paddingTop: "3%",
  position: "relative",
  marginLeft: "-55%",
};

const headingStyle = {
  fontSize: "4.5rem",
};

const pStyle = {
  fontSize: "1.5rem",
  width: "80%",
  textAlign: "center",
};

const btnStyle = {
  borderWidth: "1.5px",
  minHeight: "50px",
  width: "35%",
};

const containerStyle = {
  paddingTop: "30vh",
  maxWidth: "900px",
};

const formHeadingStyle = {
  marginTop: "10%",
};

const templatesContainerStyle = {
  height: "600px",
};

export default HomePage;

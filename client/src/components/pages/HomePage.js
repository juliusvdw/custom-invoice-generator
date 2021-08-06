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
        <div className="container " style={{ height: "90vh" }}>
          <div className=" text-center " id="main-left">
            <div className="container-fluid h-100" style={containerStyle}>
              <h1 className="heading" style={headingStyle}>
                Create Elegant Invoices Within Minutes              </h1>
              <p style={pStyle} className="mt-3 mx-auto">
                Select one of our templates and create a proffesional invoice within
                a matter of minutes. Quick, easy and free.
              </p>
              <Link to="templates-section" smooth={true} duration={800}>
                <btn
                  className="btn btn-primary  btn-lg mt-4  btn-custom"
                  style={btnStyle}
                >
                  <strong>Create A Free Invoice</strong>
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

      <div className="container" id="form-section">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h2 style={formHeadingStyle}>
              <i className="fas fa-plus-circle pr-3"></i> New Invoice
            </h2>
          </div>
        </div>

        <div className="col-lg-10 mx-auto">
          <Form />
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
  fontSize: '74px',
  fontWeight:'bold'
};

const pStyle = {
  fontSize: "20px",
  width: "80%",
  textAlign: "center",
  color:'#394550'
};

const btnStyle = {
  borderWidth: "1.5px",
  minHeight: "50px",
  width: "300px",
  backgroundColor:'#2F2FA1 !important'
};

const containerStyle = {
  paddingTop: "10vh",
  maxWidth: "900px",
};

const formHeadingStyle = {
  paddingTop: "50px",
};

const templatesContainerStyle = {
  height: "720px",
  paddingTop: "50px",
};

export default HomePage;

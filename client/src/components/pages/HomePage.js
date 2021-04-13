import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";

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
              <Link to="/pdf">
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
  colr: "#1c7ff2",
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

export default HomePage;

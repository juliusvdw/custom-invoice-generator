import React from "react";

const HomePage = () => {
  return (
    <div id="home">
      <div className="container-fluid " style={{ height: "100vh" }}>
        <div className="row h-100">
          <div className="col-lg-8 col-md-8 text-left " id="main-left">
            <div className="container-fluid h-100" style={containerStyle}>
              <h2
                className=""
                style={{
                  color: "#1c7ff2",
                }}
              >
                <strong> Create elegant invoices within minutes </strong>
              </h2>
              <p style={pStyle} className="mt-3">
                Select one of our templates and create a stunning invoice within
                a matter of minutes. For free.
              </p>

              <btn
                className="btn btn-outline-primary form-control btn-lg mt-4 w-50 "
                style={btnStyle}
              >
                Create Invoice
              </btn>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 d-none d-md-block"
            style={{ background: "#1c7ff2" }}
            id="main-right"
          >
            <img src="files.svg" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

const imageStyle = {
  height: "100%",
  width: "110%",
  paddingTop: "3%",
  position: "relative",
  marginLeft: "-55%",
};

const pStyle = {
  fontSize: "1.2rem",
};

const btnStyle = {
  borderWidth: "1.5px",
  minHeight: "50px",
};

const containerStyle = {
  paddingTop: "35vh",
  paddingRight: "20%",
  paddingLeft: "7%",
};

export default HomePage;
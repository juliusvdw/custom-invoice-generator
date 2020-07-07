import React from "react";

const HomePage = () => {
  return (
    <div id="home">
      <div className="container-fluid " style={{ height: "100vh" }}>
        <div className="row h-100">
          <div className="col-lg-7 col-md-7" id="main-left">
            Test
          </div>
          <div
            className="col-lg-5 col-md-5 d-none d-md-block"
            style={{ background: "#1c7ff2" }}
            id="main-right"
          >
            Test
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

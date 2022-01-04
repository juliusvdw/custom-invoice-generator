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
        <div className="container p-0" style={{ height: "90vh" }}>
          <div className="  " id="main-left">
            <div className="" style={containerStyle}>
              <h1 className="heading" style={headingStyle}>
                Create Elegant Invoices Within Minutes              </h1>
              <p style={pStyle} className="mt-3 ">
                Select one of our templates and create a proffesional invoice within
                a matter of minutes. Quick, easy and free.
              </p>
              <Link to="templates-section" smooth={true} duration={800}>
                <btn
                  className="btn btn-primary  btn-lg mt-3  btn-custom"
                  style={btnStyle}
                >
                  <strong>Create  Invoice</strong>
                </btn>
              </Link>
            </div>
          </div>

          <div className = '' style = {imageContainerStyle}>
        <img src = '/invoice.svg' style = {heroImageStyle}/>

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

      <div className="container-fluid" id="form-section" style = {formSectionStyle}>
        

        <div className = 'row'>

        

        <div className="col-lg-12 offset-md-1 " style = {formColStyle}>
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
  fontSize: '54px',
  fontWeight:'bold'
};

const pStyle = {
  fontSize: "20px",
  width:'90%',
  color:'#394550'
};

const btnStyle = {
  borderWidth: "1.5px",
  minHeight: "50px",
  width: "200px",
  backgroundColor:'#2F2FA1 !important'
};

const containerStyle = {
  paddingTop: "190px",
  width:'600px',
  textAlign:'left'
};

const formHeadingStyle = {
  paddingTop: "50px",
};

const templatesContainerStyle = {
  height: "790px",
  paddingTop:'50px'
};

const imageContainerStyle = {

}

const heroImageStyle = {
  position :'absolute',
  right:'50px',
  top:'150px',
  width:'550px',
  height:'550px'
}

const formSectionStyle = {
  backgroundColor:'#ffffff'
}


const formColStyle = { 
  
}

const sideBarColStyle = {
height:'100vh'
}



export default HomePage;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
  useEffect(() => {
    //Determine navbar color based on path. Pdf page requires background color

    window.location.pathname === "/pdf"
      ? (navClass = "navbar")
      : (navClass = "navbar fixed-top");
  }, []);

  let navClass;

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        paddingLeft:'150px',
      }}
    >
      <p className="navbar-brand " href="#" style={logoStyle}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {" "}
          <span>easy</span>invoice{" "}
        </Link>
      </p>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto" >
      <li class="nav-item active" style = {navItemStyle}>
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item" style = {navItemStyle}>
        <a class="nav-link" href="#">Features</a>
      </li>
    </ul>

   <ScrollLink to = 'templates-section' smooth={true} duration={800}><btn className = 'btn btn-lg btn-primary btn-custom-small mr-4 d-none d-lg-block'>Create Invoice</btn></ScrollLink>
    
  </div>
</nav>
  );
};

//create style vars

const navListStyle = {
  paddingRight: "5%",
};

const navItemStyle = {
  marginRight:'40px',
}

const logoStyle = {
  fontSize: "2rem",
};

const btnStyle = {
};

export default Navbar;

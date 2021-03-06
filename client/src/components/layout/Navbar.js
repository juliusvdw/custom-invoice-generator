import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
      className="navbar"
      style={{
        height: "70px",
        borderBottom: "1px solid rgb(220,220,220) ",
        paddingBottom: "70px",
        backgroundColor: "white",
      }}
    >
      <p className="navbar-brand " href="#" style={logoStyle}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {" "}
          <span>easy</span>invoice{" "}
        </Link>
      </p>

      <ul className="navbar-nav ml-auto d-none d-md-block" style={navListStyle}>
        <li className="nav-item active">
          {window.location.pathname === "/" && (
            <Link to="/pdf" className="nav-link" href="#">
              <button className="btn btn-outline-primary" style={btnStyle}>
                <strong>Create Invoice</strong>
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

//create style vars

const navListStyle = {
  paddingRight: "5%",
};

const logoStyle = {
  paddingLeft: "5%",
  fontSize: "2rem",
};

const btnStyle = {
  backgroundColor: "white !important",
};

export default Navbar;

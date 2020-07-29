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
      className={
        window.location.pathname === "/pdf" ? "navbar" : "navbar fixed-top"
      }
      style={{ height: "70px" }}
    >
      <p className="navbar-brand " href="#" style={logoStyle}>
        <span className="text-primary">easy</span>invoice
      </p>

      <ul className="navbar-nav ml-auto d-none d-md-block" style={navListStyle}>
        <li className="nav-item active">
          {window.location.pathname === "/" && (
            <Link to="/pdf" className="nav-link" href="#">
              <button className="btn btn-warning">
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

export default Navbar;

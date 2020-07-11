import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar   fixed-top">
      <p className="navbar-brand" href="#" style={logoStyle}>
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

const navListStyle = {
  paddingRight: "5%",
};

const logoStyle = {
  paddingLeft: "5%",
  fontSize: "2.5rem",
};

export default Navbar;

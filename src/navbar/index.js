import React from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header sticky-header">
      <div className="top">
        {/* <div>
          <img src="/images/idfy-logo.svg" alt="Idfy Logo" />
        </div> */}
        <div className="flex-row-center font-bold font-size">
          <img src="/images/virtual-reality.png" width="40px" height="40px" alt="Idfy Logo" />
          <span>OptimEye</span>
        </div>
        <div className="d-flex gap-1">
          <ul className="header-nav">
            <li>
              <NavLink
                to="/dashboard"
                exact
                className="nav-link"
                activeClassName="active"
              >
                Dashboard <div></div>{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upload"
                exact
                className="nav-link"
                activeClassName="active"
              >
                Upload <div></div>{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

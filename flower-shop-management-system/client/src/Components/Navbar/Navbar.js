import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ 'backgroundColor': "#661d3e" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="/Home"
                  className=" fs-4 text-light text-decoration-none "
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/AddFlower"
                  className=" fs-4 text-light text-decoration-none ms-4 "
                  style={{ cursor: "pointer" }}
                >
                  Add Flower
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ShowFlowers"
                  className=" fs-4 text-light text-decoration-none ms-4 "
                  style={{ cursor: "pointer" }}
                >
                  View Flower
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Registration"
                  className=" fs-4 text-light text-decoration-none ms-4 "
                  style={{ cursor: "pointer" }}
                >
                  Register
                </Link>
                </li>
              <li className="nav-item">
                <Link
                  to="/Login"
                  className=" fs-4 text-light text-decoration-none ms-4 "
                  style={{ cursor: "pointer" }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

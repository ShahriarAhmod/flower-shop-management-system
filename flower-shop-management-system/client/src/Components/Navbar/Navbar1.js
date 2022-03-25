import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';



const Navbar1 = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#661d3e" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/Registration"
                  className=" fs-5 text-light text-decoration-none ms-4 nav1TextStyle "
                  style={{ cursor: "pointer" }}
                >
                  Register
                </Link>
                <span className="ms-3 text-light fw-bold fs-5">|</span>
              </li>
              <li className="nav-item">
                <Link
                  to="/Login"
                  className=" fs-5 text-light text-decoration-none ms-4 nav1TextStyle"
                  style={{ cursor: "pointer" }}
                >
                  Login
                </Link>
                <span className="ms-3 text-light fw-bold fs-5">|</span>
              </li>
              <li className="nav-item">
                <Link
                  to="/Login"
                  className=" fs-5 text-light text-decoration-none ms-4 me-5 pe-5"
                  style={{ cursor: "pointer" }}
                >
                  <i class="fas fa-shopping-basket"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;

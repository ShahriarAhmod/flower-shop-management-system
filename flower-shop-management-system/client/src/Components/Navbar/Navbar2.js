import React from "react";
import { Link } from "react-router-dom";
import icon from "../../images/logo.png";
import './Navbar.css';

const Navbar2 = () => {
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#ffff" }}
        >
          <div className="container-fluid">
          <img className="ms-5" src={icon} alt="" style={{ width: "40px" }} />
          <span
            className="fs-1 fw-bold ms-2 title"
            style={{ color: "#1F1E1E"}}
          >
            Florista
          </span>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto my-3">
                <li className="nav-item">
                  <Link
                    to="/"
                    className=" fs-5 text-dark text-decoration-none nav2TextStyle"
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Shop"
                    className=" fs-5 text-dark text-decoration-none ms-4 nav2TextStyle"
                    style={{ cursor: "pointer" }}
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/AddFlower"
                    className=" fs-5 text-dark text-decoration-none ms-4 nav2TextStyle "
                    style={{ cursor: "pointer" }}
                  >
                    Add Flower
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ShowFlowers"
                    className=" fs-5 text-dark text-decoration-none ms-4  me-5 pe-5 nav2TextStyle"
                    style={{ cursor: "pointer" }}
                  >
                    View Flower
                  </Link>
                </li>             
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;

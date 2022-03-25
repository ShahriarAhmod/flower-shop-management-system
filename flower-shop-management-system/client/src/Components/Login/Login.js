import React from "react";
import { Link } from "react-router-dom";
import login from "../../images/login.png";
import "./login.css";

const Login = () => {
  return (
    <div className="p-3" style={{'backgroundColor': '#1C223E', 'height':'83vh'}}>
      
      <div className="bg-light row w-50 mx-auto p-4 mt-5">
         
      <div className="col-lg-6 mt-5">
      <img src={login} style={{'width': '100%', 'height': '90%'}} alt="" />
      </div>
      <div className="col-lg-4">
          <h5
            className="pb-4 text-center fw-bold textStyle mt-5"
            style={{ color: "#391147 " }}
          >
            Please Login here
          </h5>
          <form>
            <div className="mb-4">
              {/* <label
                htmlFor="exampleInputUsername"
                className="form-label text-success"
              >
                User name
              </label> */}
              <input
                type="email"
                placeholder="Enter Username"
                className="form-control border border-secondary rounded-pill"
              />
            </div>
            <div className="mb-4">
              {/* <label
                htmlFor="exampleInputEmail1"
                className="form-label text-success"
              >
                Email address
              </label> */}
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control border border-secondary rounded-pill"
              />
            </div>

            <div className="mb-4">
              {/* <label
                htmlFor="exampleInputPassword1"
                className="form-label text-success"
              >
                Password
              </label> */}
              <input 
                type="password"
                placeholder="Enter Password"
                className="form-control border border-secondary rounded-pill"
              />
            </div>

            <button
              type="button"
              className="btn btn-secondary mt-2 border rounded-pill"
              style={{ width: "150px" }}
            >
              Submit
            </button>

            <p className="fw-normal pb-3 pt-4">
              Are you New Here?<br/> Please{" "}
              <Link to="/registration" className="fw-bold text-decoration-none">
                {" "}
               Register{" "}
              </Link>{" "} first
             
            </p>
          </form>
        </div>
      </div>

      </div>
   
  );
};

export default Login;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import registerBg from "../../images/RegisterBg.png";
import './Registration.css'

const Registration = () => {
  const [userNameReg, setUserNameReg] = useState("");
  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  // const [phoneReg, setPhoneReg] = useState("");
  // const [addressReg, setAddressReg] = useState("");

  const register = () => {
    Axios.post("https://localhost:3001/register", {
      userName: userNameReg,
      name: nameReg,
      email: emailReg,
      password: passwordReg,
      // phone: phoneReg,
      // address: addressReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="row border-top border-dark">
      <div className="col-lg-6 p-5" style={{'backgroundColor':'#A4C4B5'}}>
        <img src={registerBg} style={{'width': '90%', 'height': '90%'}} alt="" />
      </div>
    <div className="px-5 mx-auto col-lg-4 ">
      <p
            className="fs-1 title pt-2"
            style={{ color: "#1F1E1E"}}
          >
            Florista
          </p> <br/>
          <h4 className="textStyle">
            Welcome to Florista
          </h4>


      <Form className="mx-auto">
        <div className="mt-5 mb-5">
          <input className="inputStyle "
            type="text"
            onChange={(e) => {
              setUserNameReg(e.target.value);
            }}
            placeholder="Enter your Username"
          />
        </div>
        <div className="mb-5">
         
          <input className="inputStyle"
            type="text"
            onChange={(e) => {
              setNameReg(e.target.value);
            }}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-5">
          
          <input className="inputStyle"
            type="email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
            placeholder="Enter your email"
          /><br/>
          {/* <p className="text-muted">
            We'll never share your email with anyone else.
          </p> */}
        </div>

        <div className="mb-5">
         
          <input className="inputStyle"
            type="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
            placeholder="Password"
          />
        </div>

        {/* <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => {
              setPhoneReg(e.target.value);
            }}
            placeholder="Enter your number"
          />
        </Form.Group> */}
        {/* <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setAddressReg(e.target.value);
            }}
            placeholder="Enter your Address"
          />
        </Form.Group> */}
        <Button onClick={register} variant="secondary" type="submit" className="border rounded-pill px-4 mt-3">
          Sign Up
        </Button>
      </Form>
    </div>
    
    </div>
  );
};

export default Registration;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import registerBg from "../../images/register.png";

const Registration = () => {
  const [userNameReg, setUserNameReg] = useState("");
  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");
  const [addressReg, setAddressReg] = useState("");

  const register = () => {
    Axios.post("https://localhost:3001/register", {
      userName: userNameReg,
      name: nameReg,
      email: emailReg,
      password: passwordReg,
      phone: phoneReg,
      address: addressReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="row">
    <div className="px-5 py-2 mx-5 col">
      <h3 className="text-info">Register here</h3>
      <Form className="w-75 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label className="">Username</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setUserNameReg(e.target.value);
            }}
            placeholder="Enter your Username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setNameReg(e.target.value);
            }}
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
            placeholder="Enter your email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => {
              setPhoneReg(e.target.value);
            }}
            placeholder="Enter your number"
          />
        </Form.Group>
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
        <Button onClick={register} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    <div className="py-5 my-5 col">
        <img src={registerBg} alt="" />
      </div>
    </div>
  );
};

export default Registration;

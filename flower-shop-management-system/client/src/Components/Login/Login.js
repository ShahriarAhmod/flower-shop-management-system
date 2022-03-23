import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import loginBg from "../../images/login.png";
import { Link } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      userName: userName,
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className='container mt-5 pt-3 pb-5 mb-5'>
    <div className="d-flex align-items-center justify-content-between" >
        <div>
        <h4 className='pb-3 text-center fw-bold' style={{ color: 'rgb(54, 224, 227)' }}>Please Login here</h4>
     <form>
         <div className="mb-3">
             <label htmlFor="exampleInputUsername" className="form-label text-success">User name</label>
             <input type="email" placeholder="Enter Username"  className="form-control" />
         </div>
         <div className="mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label text-success">Email address</label>
             <input type="email" placeholder="Enter Email"  className="form-control" />
         </div>

         <div className="mb-3">
             <label htmlFor="exampleInputPassword1" className="form-label text-success">Password</label>
             <input type="password" placeholder="Enter Password"  className="form-control" />
         </div>

         <button type="button"  className="btn btn-secondary mt-2" style={{ width: '150px' }}>Submit</button>

         <h5 className='fw-normal pb-3 pt-4'>Are you New Here? <Link to='/register' className="fw-bold"> Register </Link> First if you want to Login</h5>

        
     </form>

        </div>

        <div>
            <img src={loginBg} alt="" />
        </div>
    </div>
 </div>
    // <div className=" d-flex">
    //   <div className="w-75 p-3">
    //   <h1>Login here</h1>
    //   <Form className="w-50">
    //     <Form.Group className="mb-3">
    //       <Form.Label>Username</Form.Label>
    //       <Form.Control
    //         type="text"
    //         onChange={(e) => {
    //           setUserName(e.target.value);
    //         }}
    //         placeholder="Username"
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         onChange={(e) => {
    //           setEmail(e.target.value);
    //         }}
    //         placeholder="Enter email"
    //       />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         onChange={(e) => {
    //           setPassword()(e.target.value);
    //         }}
    //         placeholder="Password"
    //       />
    //     </Form.Group>
    //     <Button onClick={login} variant="primary" type="submit">
    //       Submit
    //     </Button>
    //     <h1>{loginStatus}</h1>
    //   </Form>
    //   </div>
    //   <div className="p-2">
    //     <img src={loginBg} alt="" />
    //   </div>
    // </div>
  );
};

export default Login;

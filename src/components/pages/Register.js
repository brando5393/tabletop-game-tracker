import React, { useState } from "react";
import axios from "axios";
import FormHeading from "../FormHeading/FormHeading.js";

const Register = () => {
  const [accountInfo, setAccountInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setAccountInfo({
      ...accountInfo,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/register", accountInfo)
      .then((req, res) => {
        console.log(req.body);
        console.log(res);
      })
      .catch((err) => console.log(err));
    console.log(accountInfo);
  };

  return (
    <div>
      <FormHeading
        mainText="Register"
        subText="Create an account to save your games and so much more."
        image="https://www.flaticon.com/svg/static/icons/svg/3893/3893041.svg"
      />
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="form-control"
          placeholder="John"
          aria-describedby="firstNameHelp"
          value={accountInfo.firstName}
          onChange={handleChange}
          required
        />
        <span id="firstNameHelp" className="form-text">
          Please enter your fist name.
        </span>
        <label htmlFor="lastName" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-control"
          placeholder="Doe"
          aria-describedby="lastNameHelp"
          value={accountInfo.lastName}
          onChange={handleChange}
          required
        />
        <span id="lastNameHelp" className="form-text">
          Please enter your last name.
        </span>
        <label htmlFor="email" className="form-label">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Jdoe1123@gmail.com"
          aria-describedby="emailHelp"
          value={accountInfo.email}
          onChange={handleChange}
          required
        />
        <span id="emailHelp" className="form-text">
          Please enter your E-mail address.
        </span>
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="text"
          id="password"
          name="password"
          className="form-control"
          aria-describedby="passwordHelp"
          value={accountInfo.password}
          onChange={handleChange}
          required
        />
        <span id="passwordHelp" className="form-text">
          Please enter a password.
        </span>
        <button
          onClick={handleSubmit}
          id="registerSubmit"
          className="btn btn-success"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

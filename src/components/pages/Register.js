import React, { useState } from "react";
import axios from "axios";
import FormHeading from "../FormHeading/FormHeading.js";

const Register = (props) => {
  const [accountInfo, setAccountInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setAccountInfo({
      [name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <label for="firstNameInput" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          id="firstNameInput"
          name="firstNameInput"
          className="form-control"
          placeholder="John"
          aria-describedby="firstNameInputHelp"
          value={accountInfo.firstName}
          onChange={handleChange}
          required
        />
        <span id="firstNameInputHelp" class="form-text">
          Please enter your fist name.
        </span>
        <label for="lastNameInput" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          id="lastNameInput"
          name="lastNameInput"
          className="form-control"
          placeholder="Doe"
          aria-describedby="lastNameInputHelp"
          value={accountInfo.lastName}
          onChange={handleChange}
          required
        />
        <span id="lastNameInputHelp" class="form-text">
          Please enter your last name.
        </span>
        <label for="emailInput" className="form-label">
          E-mail:
        </label>
        <input
          type="email"
          id="emailInput"
          name="emailInput"
          className="form-control"
          placeholder="Jdoe1123@gmail.com"
          aria-describedby="emailInputHelp"
          value={accountInfo.email}
          onChange={handleChange}
          required
        />
        <span id="emailInputHelp" class="form-text">
          Please enter your E-mail address.
        </span>
        <label for="confirmEmailInput" className="form-label">
          Confirm E-mail:
        </label>
        <input
          type="email"
          id="confirmEmailInput"
          name="confirmEmailInput"
          className="form-control"
          aria-describedby="confirmEmailHelp"
          required
        />
        <span id="confirmEmailHelp" class="form-text">
          Please confirm your E-mail address.
        </span>
        <label for="passwordInput" className="form-label">
          Password:
        </label>
        <input
          type="text"
          id="passwordInput"
          name="passwordInput"
          className="form-control"
          aria-describedby="passwordInputHelp"
          value={accountInfo.password}
          onChange={handleChange}
          required
        />
        <span id="passwordInputHelp" class="form-text">
          Please enter a password.
        </span>
        <label for="confirmPasswordInput" className="form-label">
          Confirm Password:
        </label>
        <input
          type="text"
          id="confirmPasswordInput"
          name="confirmPasswordInput"
          className="form-control"
          aria-describedby="confirmPasswordInputHelp"
          required
        />
        <span id="confirmPasswordInputHelp" class="form-text">
          Please confirm your password.
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

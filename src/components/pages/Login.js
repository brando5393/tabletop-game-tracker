import React from "react";
import FormHeading from "../FormHeading/FormHeading.js";

const Login = (props) => {
  return (
    <div>
      <FormHeading
        mainText="Login"
        subText="Welcome back"
        image="https://www.flaticon.com/svg/static/icons/svg/2996/2996170.svg"
      />
      <form method="POST" action="/login">
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
          required
        />
        <span id="emailInputHelp" class="form-text">
          Please enter your e-mail.
        </span>
        <label for="passwordInput" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="passwordInput"
          name="passwordInput"
          className="form-control"
          aria-describedby="passwordInputHelp"
          required
        />
        <span id="passwordInputHelp" class="form-text">
          Please enter your password.
        </span>
        <button type="submit" id="loginSubmit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

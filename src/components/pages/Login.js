import React from "react";
import JumboHeading from "../../components/JumboHeading/JumboHeading";

const Login = (props) => {
  return (
    <div>
      <JumboHeading mainText="Login" subText="Welcome back" />
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

import React from "react";
import FormHeading from "../FormHeading/FormHeading.js";

const Register = (props) => {
  return (
    <div>
      <FormHeading
        mainText="Register"
        subText="Create an account to save your games and so much more."
        image="https://www.flaticon.com/svg/static/icons/svg/3893/3893041.svg"
      />
      <form method="POST" action="/register">
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

        <button type="submit" id="registerSubmit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

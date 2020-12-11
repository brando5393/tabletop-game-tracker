import React from "react";
import Navitem from "../Navitem/Navitem";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Navitem href="/" text="Home" />
            <Navitem href="/tracker" text="Tracker" />
            <Navitem href="/help" text="Help" />
          </ul>
          <ul className="navbar-nav ml-auto">
            <Navitem href="/register" text="Register" />
            <Navitem href="/login" text="Login" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

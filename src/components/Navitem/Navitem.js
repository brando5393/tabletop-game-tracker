import React from "react";
import { Link } from "react-router-dom";

const Navitem = (props) => {
  return (
    <div>
      <li className="nav-item">
        <Link className="nav-link" to={props.href}>
          {props.text}
        </Link>
      </li>
    </div>
  );
};

export default Navitem;

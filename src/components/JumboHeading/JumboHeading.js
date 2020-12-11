import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const JumboHeading = (props) => {
  return (
    <Jumbotron className="jumboHeading">
      <h1>{props.mainText}</h1>
      <p>{props.subText}</p>
    </Jumbotron>
  );
};

export default JumboHeading;

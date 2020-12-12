import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";

const FormHeading = (props) => {
  return (
    <Jumbotron className="jumboHeading">
      <Image className="form-heading-img" src={props.image} />
      <h1>{props.mainText}</h1>
      <p>{props.subText}</p>
    </Jumbotron>
  );
};

export default FormHeading;

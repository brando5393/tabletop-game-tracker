import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const FeatureCard = (props) => {
  return (
    <Col lg={4}>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.heading}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FeatureCard;

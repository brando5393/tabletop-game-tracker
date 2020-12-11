import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JumboHeading from "../JumboHeading/JumboHeading";

const Home = () => {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <JumboHeading mainText="Hello World" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

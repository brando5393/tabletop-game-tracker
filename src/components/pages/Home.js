import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JumboHeading from "../JumboHeading/JumboHeading";
import features from "../../data/features.js";
import FeatureCard from "../FeatureCard/FeatureCard.js";

const createFeatureCard = (feature) => {
  return (
    <FeatureCard
      key={feature.key}
      image={feature.image}
      heading={feature.heading}
      text={feature.text}
    />
  );
};

const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <JumboHeading
            mainText="Tabletop Game Tracker"
            subText="A simple tabletop RPG tracking system"
          />
        </Col>
      </Row>
      <h2>Features</h2>
      <Row>{features.map(createFeatureCard)}</Row>
    </div>
  );
};

export default Home;

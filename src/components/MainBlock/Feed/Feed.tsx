import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PlantCard from "./PlantCard";

export const Feed: React.FC = () => {
  return (
    <Container className="w-100 row">
      <Container className="col">
        <PlantCard />
      </Container>
      <Container className="col">
        <PlantCard />
      </Container>
      <Container className="col">
        <PlantCard />
      </Container>
    </Container>
  );
};

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Img from "../../../assets/images/user_background.jpg";

const PlantCard: React.FC = () => {
  return (
    <Card className="m-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title className="text-center">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PlantCard;

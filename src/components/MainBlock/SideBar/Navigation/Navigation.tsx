import React from "react";
import Image from "react-bootstrap/Image"
import { Container, ListGroup } from "react-bootstrap";

import colImg from "../../../../assets/images/park.png"
import recImg from "../../../../assets/images/photo.png"

const collectionName: string = "Моя коллекция";
const recognitionName: string = "Распознавание";

type MenuItemProps = {
  imgSrc: string;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const {imgSrc, text} = props;

  return (
      <ListGroup.Item className="d-flex flex-row">
          <Image src={imgSrc} width={20} height={20} />
          <Container>{text}</Container>
      </ListGroup.Item>
  );
};

export const Navigation: React.FC = () => {
  return (
    <Container className="mt-5">
      <ListGroup>
        <MenuItem imgSrc={colImg} text={collectionName}  />
        <MenuItem imgSrc={recImg} text={recognitionName} />
      </ListGroup> 
    </Container>
  );
};

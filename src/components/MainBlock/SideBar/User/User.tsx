import React from 'react';
import './User.css';
import { Container } from 'react-bootstrap';

export const User: React.FC = () => {
  return (
    <Container className="align-self-start mt-4">
      <h3>Username</h3>
    </Container>
  );
};

import React from "react";
import Button from "react-bootstrap/Button";

export const Logout: React.FC = () => {
  return (
    <Button variant="danger" className="mt-auto mb-4 w-75 container">
      Выйти
    </Button>
  );
};

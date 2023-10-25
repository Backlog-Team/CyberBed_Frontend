import React from 'react';
import Alert from 'react-bootstrap/Alert';

interface AlertVariation {
  type: string;
  message: string;
}

export const MyAlert: React.FC<AlertVariation> = (type: AlertVariation) => {
  return (
    <>
      <Alert className='position-absolute bottom-0 start-100' key={type.type} variant={type.type}>
        {type.message}
      </Alert>
    </>
  );
}

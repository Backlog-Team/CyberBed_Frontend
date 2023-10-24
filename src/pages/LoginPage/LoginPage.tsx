import React, { useState } from 'react';
import {Button, Form, FloatingLabel} from 'react-bootstrap'

export const LoginPage: React.FC = () => {
  const [signUpState, setSignUpState] = useState(false);

  return ( 
    <div className='container'>
      <div className='position-absolute top-50 start-50 translate-middle w-25'>
      <h1 className='text-center mb-3'>
        {signUpState ? 'Создание аккаунта' : 'Вход в аккаунт'}
      </h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Никнейм"
          className="mb-3 "
        >
          <Form.Control type="nickname" placeholder="superuser" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Пароль" className='mb-3'>
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        {signUpState && <FloatingLabel controlId="floatingPassword" label="Повторите пароль" className='mb-3'>
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>}

        <div className='raw'>
          <Button variant='dark' className='m-3 col'>
            {signUpState ? 'Зарегистрироваться' : 'Войти'}
          </Button>
        </div>
        <div className='cal'>
          <span>
            {signUpState ? 'Есть аккаунт' : 'Нет аккаунта'}? - 
            <Button variant='link' onClick={() => setSignUpState(prev => !prev)}>
              {signUpState ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </span>
        </div>
      </div>
    </div>    
  );
};

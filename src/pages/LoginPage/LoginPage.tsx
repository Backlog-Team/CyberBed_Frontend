import React from 'react';
import './LoginPage.css';

export const LoginPage: React.FC = () => {
  return (
    <form className='LoginForm'>
      <h1>Login</h1>
      <div>
        <input type='text' placeholder='login' name='login' />
      </div>
      <div>
        <input type='password' placeholder='password' name='password' />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from './input-form/login-box';
import Navbar from './nav-bar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <LoginForm/>
  </React.StrictMode>
);


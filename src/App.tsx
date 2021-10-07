import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Router } from './router/Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

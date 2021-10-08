import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header';
import { Router } from './router/Router';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;

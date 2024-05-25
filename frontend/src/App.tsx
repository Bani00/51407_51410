import React from 'react';
import './App.css';
import './components/Navbar/Navbar.css'
import './components/Body/Body.css'
import { Navbar }  from './components/Navbar/navbar'
import { Body } from './components/Body/body';

function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
    
  );
}

export default App;

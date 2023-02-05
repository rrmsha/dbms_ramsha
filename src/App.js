import React from 'react';
import './App.css';
import blobs from './blobs-01.svg';
import Navbar from './components/Navbar'
function App() {
  return (
    <>
   
   <img src={blobs} alt="" />
   <Navbar title="Text-Utility!" />
   
    </>
  );
}

export default App;

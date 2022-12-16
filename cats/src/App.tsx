import React from 'react';
import './App.css';
import { Catbox } from "./components/Catbox";

function App() {

  return (
    <>
      <div className='Title'>
      <h1>Cute cats </h1>
      </div>
      <div className='Content'>
        <Catbox/>
      </div>
    </>
  );
}

export default App;

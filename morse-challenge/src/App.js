import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <h1 className="App-title">Morse Challenge - TOBS</h1>
      <Input value={value} setValue={setValue} />
      <Output value={value} />
    </div>
  );
}

export default App;

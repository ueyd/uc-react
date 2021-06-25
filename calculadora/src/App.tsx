
import React from 'react';
import './App.css';
import {Button} from './Button'
import { Calculator } from './Calculator';

function App() {
  return (
    <div className='wrapper'>
      <Calculator/>
      <Button>Hola!</Button>
      <Button disable>Hola!</Button>
    </div>
  );
}

export default App;

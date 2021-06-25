import React from 'react';
import './App.css';
import { Home } from './componentes/Home';


export class App extends React.Component {
  render(){
    return (
      <div>
        <header>
          <p>
            MMDB
          </p>
          
          
        </header>
        <main>
        <div>
            <h1>Peliculas </h1>
            <Home/>
          </div>
        </main>
      </div>
      
    );
  }
}

export default App;

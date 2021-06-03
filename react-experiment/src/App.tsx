import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    isUserLogin: false,
    age: 99,
    loading: true
  }
  render()
  {
    const ageMessage = this.state.age > 50 ? `Ciudadano de oro` : `Adulto joven.`;
    const {loading} = this.state; 
    return (
      <div>
        {loading ? (
          <div>Loading .................</div>
        ) : (
          <div>
            <p>Bienvenido al app</p>
            <p>{ageMessage}</p>
          </div>
        )}
        <div>
          <button onClick={() => this.setState({loading:!loading})}>Iniciar</button>
        </div>
      </div>
    );
  }
}

export default App;

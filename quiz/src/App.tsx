import React from 'react';
import './App.css';
import { NotFound } from './componentes/NotFound';
import { Plant } from './componentes/Plant';
import { IPlants, PLANTS_DATA, CONSTANTES } from './data';

export interface IAppState{
  plants:IPlants[]
}

export class App extends React.Component<{}, IAppState>{

  private GetInitialState(){
    return {
      plants: PLANTS_DATA
    }
  }

  constructor(props:{}){
    super(props);
    //this.state = this.GetInitialState();
    this.eQuantityChange = this.eQuantityChange.bind(this);
  }

  componentDidMount(){
    this.setState(this.GetInitialState());
  }

  eQuantityChange(id:number, action:string){
    this.setState(state => {
      const plants = state.plants.map(
        (plant) => {
          if(plant.id === id)
          {
            if(action === CONSTANTES.AUMENTAR) plant.quantity++; 
            if(action === CONSTANTES.DISMINUIR) plant.quantity--;
          }
          return plant;
        }
      );
      const foundIndex = plants.findIndex(p => p.id === id);
      if(plants[foundIndex] && plants[foundIndex].quantity <= 0)
        plants.splice(foundIndex, 1);
      return { plants }
    });
  }

  render(){
    if(this.state)
    {
      const {plants} = this.state;
      return (
        (plants.length > 0) ?
          <div className="row">
              {plants.map(plant => 
              (plant.quantity > 0) ?
                <Plant plant={plant} key={plant.id} eQuantityChange={this.eQuantityChange}/>
                :
                null
              )}
          </div>
          :
          <NotFound/>
      )
    }
    else
    return <NotFound/>;
  }
}

export default App;


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
    this.eQuantityChange = this.eQuantityChange.bind(this);
  }

  componentDidMount(){
    this.setState(this.GetInitialState());
  }

  eQuantityChange(id:number, action:string){
    this.setState(state => {
      const {plants} = state;
      const plantsMod = plants.map(
        (plant) => {
          if(plant.id === id)
          {
            let quantity = plant.quantity;
            if(action === CONSTANTES.AUMENTAR) quantity = plant.quantity + 1; 
            if(action === CONSTANTES.DISMINUIR) quantity = plant.quantity - 1;
            let newPlant = {
              id:id,
              title: plant.title,
              description:  plant.description,
              imgURL:  plant.imgURL,
              quantity: quantity
            }
            return newPlant;
          }
          return plant;
        }
      );
      const foundIndex = plantsMod.findIndex(p => p.id === id);
      if(plantsMod[foundIndex] && plantsMod[foundIndex].quantity <= 0)
        plantsMod.splice(foundIndex, 1);
      return { plants: plantsMod }
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


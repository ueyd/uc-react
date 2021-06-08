import React from 'react';
import { IPlants, CONSTANTES } from '../data';

interface IPlantProps{
    plant:IPlants,
    eQuantityChange:(idx:number, action:string) => void;
}

export class Plant extends React.Component<IPlantProps, {}>{

    render(){
        const {id, description, imgURL, quantity, title} = this.props.plant;
        return (
            <div className="col-sm-6">    
                <div className="card">
                    <div className="card-body">
                    <img src={imgURL} className="card-img-top card-img" alt={title}/>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>Cantidad: {quantity}</p>
                        <button 
                        onClick={() => this.props.eQuantityChange(id, CONSTANTES.AUMENTAR)}
                        type="button" className="btn btn-success">Aumentar</button>
                        <button 
                        onClick={() => this.props.eQuantityChange(id, CONSTANTES.DISMINUIR)}
                        type="button" className="btn btn-danger">Disminuir</button>
                    </div>
                </div>
            </div>
        )
    }
  }
  
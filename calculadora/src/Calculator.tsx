import React from 'react';
import {BoilingVerdict} from './BoilingVerdict'
import { ScaleType, TemperatureInput } from './TemperatureInput';

export interface ICalculatorState {
    temperature:string;
    scale:string
}

export class Calculator extends React.Component<{}, ICalculatorState> {

    constructor(props:{} | Readonly<{}>){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this); 
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'}; 
    }

    handleCelsiusChange(temperature:string){
        this.setState({scale: 'c', temperature});
    }

    handleFarenheitChange(temperature:string){
        this.setState({scale: 'f', temperature});
    }

    render(){

        const toCelsius = (farenheit:number) => {
            return (farenheit - 32) * 5 / 9;
        }

        const toFarenheit = (celsius:number) => {
            return (celsius * 9 / 5) + 32;
        }

        const tryConvert = (temperature:string, convert:(type:number) => number) => {
            const input = parseFloat(temperature);
            if(Number.isNaN(input)){
                return '';
            }
            const ouput = convert(input);
            const rounded = Math.round(ouput * 1000) / 1000;
            return rounded.toString();
        }
        const {temperature, scale} = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const farenheit = scale === 'c' ? tryConvert(temperature, toFarenheit) : temperature;
        const boilingStatus = parseFloat(celsius);
        return <div>
            <TemperatureInput scale={ScaleType.C} temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
            <TemperatureInput scale={ScaleType.F} temperature={farenheit} onTemperatureChange={this.handleFarenheitChange}/>
            <BoilingVerdict celsius={boilingStatus}/>
        </div>
        // return (
        //     <div>
        //         {celsius >= 100 ? (
        //             <p>The water would boil</p>
        //         ):(
        //             <p>The water would not boil</p>
        //         )}
        //     </div>   
        // )
    }
}
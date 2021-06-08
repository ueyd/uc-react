import React from 'react'
import {User} from './Table'

interface FormProps{
    handleSubmit: (user:User) => void;
}

export class Form extends React.Component<FormProps>{

    initialState:User = {
        name: '',
        job: ''
    }

    state = this.initialState;

    options = [
        {
            label: 'San José',
            value: 'SJ'
        },
        {
            label: 'Heredia',
            value: 'H'
        },
        {
            label: 'Alajuela',
            value: 'A'
        }
    ]

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {name, job} = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
                <label htmlFor="job">Job</label>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange}/>
                <label htmlFor="address">Address</label>
                <select name="address" id="address" onChange={this.handleChangeSelect}>
                    {this.options.map (
                        option => 
                        <option key={option.value} value={option.value}>{option.label}</option>
                    )}
                </select>
                
                <input type="button" value="submit" onClick={this.submitForm}/>
            </form>
        );
    }
}
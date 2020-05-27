import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCitizenship extends Component {

    constructor(props) {
        super(props);

        this.onChangeCountryCode = this.onChangeCountryCode.bind(this);
        this.onChangeCountryName = this.onChangeCountryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            country_code: '',
            country_name: '',
        }
    }

    onChangeCountryCode(e) {
        this.setState({
            country_code: e.target.value
        });
    }

    onChangeCountryName(e) {
        this.setState({
            country_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Citizenship Form submitted:`);
        console.log(`Country code: ${this.state.country_code}`);
        console.log(`Name: ${this.state.country_name}`);
        
        const citizenship = {
            country: this.state.country_code,
            name: this.state.country_name
        };

        axios.post('http://localhost:3006/core/config/citizenships', citizenship)
            .then(res => console.log(res.data));
            
        this.setState({
            country_code: '',
            country_name: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Citizenship</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Country Code: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.country_code}
                                onChange={this.onChangeCountryCode}
                                />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.country_name}
                                onChange={this.onChangeCountryName}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Citizenship" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

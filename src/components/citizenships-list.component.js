import React, { Component } from 'react';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.country}</td>
        <td>{props.todo.name}</td>
    </tr>
)

export default class CitizenshipsList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3006/core/config/citizenships')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    citizenshipList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Citizenships</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Country Code</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.citizenshipList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

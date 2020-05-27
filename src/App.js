import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateCitizenship from "./components/create-citizenship.component";
import CitizenshipsList from "./components/citizenships-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Skynet Config App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Citizenships</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Citizenship</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={CitizenshipsList} />
          <Route path="/create" component={CreateCitizenship} />
        </div>
      </Router>
    );
  }
}

export default App;

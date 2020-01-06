import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Projects from './Projects';

class App extends Component {
  render(){
    return(
      <Router>
        <div className = 'container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <a class="navbar-brand" href='#' target="_blank">
            </a>
            <Link to='/' className= 'navbar-brand'>Home</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/projects" className="nav-link">Projects</Link>
                </li>
              </ul>
            </div>
          </nav>
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' component = {About} />
        <Route path = '/projects' component = {Projects}/> 
        </div>
      </Router>
    )
  }
}

export default App;

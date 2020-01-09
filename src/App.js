import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'
import logo from './images/logo.png';


class App extends Component {
  render(){
    return(
      <Router>
        <div className = 'container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <a class="navbar-brand">
              <img src = {logo} width= '80' height='50' alt = 'Studio Ghibli Logo' />
          </a>
            <div className="navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item active">
                  <Link to='/' className= 'navbar-brand'>Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/projects" className="nav-link">Projects</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' component = {About} />
        <Route path = '/projects' component = {Projects}/> 
        <Route path = '/contact' component = {Contact}/>
        </div>
      </Router>
    )
  }
}

export default App;

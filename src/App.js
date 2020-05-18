import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'
import logo from './images/lotus-flower.png';
import './App.css'


class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/"><img src={logo} alt="lotus flower" width= '80' height='80' alt='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="app-link" to="/">Home</Link>
                <Link className="app-link" to='/projects'>Projects</Link>
              </Nav>
              <Nav>
                <Link className="app-link" to="/about">About</Link>
                <Link className="app-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
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

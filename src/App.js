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


class App extends Component {
  render(){
    return(
      <Router>
        <div className = 'container'>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/"><img src={logo} width= '80' height='80' alt='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href='/projects'>Projects</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
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

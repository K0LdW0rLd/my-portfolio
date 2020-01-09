import React, {Component} from 'react';
import './Projects.css';
import trivia from './images/triviaGame.jpeg'
import studio from './images/studioAPI.jpeg'
import studioFull from './images/studioFull.jpeg'

class Projects extends Component {
    render () {
        return (
            <div className= 'projects'>
                <h1>My Projects</h1>
                <div className='projects-section'>
                    <h3>Studio Ghibli</h3>
                    <img src = {studioFull} width = '200' height = '150'/>
                    <p>This website was created to show appreciation to Studio Ghibli films.  It is a full stack application utilizing a database I created with MongoDB, Express, and Node. The front-end is built using react and allows the user to go through the different tabs to find out more information.  Bootstrap was used to help for the responsive design.  This project allowed me to develop my full stack skills while showing appreciation to the movies I loved growing up.</p>
                    <a href ='https://mystifying-cray-69b25b.netlify.com/' target='_blank'><strong>Deployed Site</strong></a><br></br>
                    <a href ='https://github.com/K0LdW0rLd/studio-ghibli' target='_blank'><strong>GitHub Repo</strong></a>
                </div>
                <div className='projects-section'>
                    <h3>Studio Ghibli Api</h3>
                    <img src = {studio} width = '200' height = '150'/>
                    <p>This API allows you to view Studio Ghibli films titles, descriptions, directors, producers, rotten tomato score, and year developed.  This project is the backend for the Studio Ghibli website that I created.  This project gave me an opportunity to grow my back-end skills.</p>
                    <a href ='https://studio-ghibli-970.herokuapp.com/studio' target='_blank'><strong>Deployed Site</strong></a><br></br>
                    <a href ='https://github.com/K0LdW0rLd/studio-ghibli-api' target='_blank'><strong>GitHub Repo</strong></a>
                </div>
                <div className='projects-section'>
                    <h3>Trivia Game</h3>
                    <img src = {trivia} width = '200' height = '150'/>
                    <p>This is the first project I ever built using just HTML, CSS, and Javascript.  We were given a list of game types to choose from.  I wanted to create something that took both my interest video-games and music.</p>
                    <a href ='https://serene-lamarr-d4da07.netlify.com/' target='_blank'><strong>Deployed Site</strong></a><br></br>
                    <a href ='https://github.com/K0LdW0rLd/Trivia-Game' target='_blank'><strong>GitHub Repo</strong></a>
                </div>
            </div>
        )
    }
}

export default Projects;
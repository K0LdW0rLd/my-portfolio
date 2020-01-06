import React, {Component} from 'react';
import me from './images/headshot.jpg';
import './About.css';

class About extends Component {
    render () {
        return (
            <div className='about'>
                <div className='greeting'>
                    <h1 className='hola'>Hi! I am Kelly</h1>
                </div>
                <img src= {me} width= '285' height='200' alt = 'headshot' />
                <div className='iAbout'>
                    <h3 className='headingThree'>Me</h3>
                    <p>Since the first alert of Hello World, I knew I wanted to jump into the world of development and programming.  Having a background in Intelligence Analysis, I look at all angles when it comes to solving problems.  I enjoy working with others in a collaborative environment with an emphasis on team development.</p>
                    <h3 className='headingThree'>Interests</h3>
                    <p>I love to learn new things about technology. My hobbies include playing videogames, listening to music, playing sports, or reading a good detective novel or anything tech related.</p>
                    <h3 className='headingThree'>Contact Information</h3>
                    <ul>
                        <li>Phone: 757-339-7428</li>
                        <li>Email: 90kcol@gmail.com</li>
                        <li>GitHub: https://github.com/K0LdW0rLd</li>
                        <li>Linkedin: https://www.linkedin.com/in/90kcol/</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default About;
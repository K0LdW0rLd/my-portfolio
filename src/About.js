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
                <img className='myPicture' src= {me} width= '285' height='200' alt = 'headshot' />
                <div className='iAbout'>
                    <h3 className='headingThree'>Me</h3>
                    <p>Since the first alert of Hello World, I knew I wanted to jump into the world of development and programming.  Having a background in Intelligence Analysis, I look at all angles when it comes to solving problems.  I enjoy working with others in a collaborative environment with an emphasis on team development.</p>
                    <h3 className='headingThree'>Interests</h3>
                    <p>I love to learn new things about technology. My hobbies include playing videogames, listening to music, playing sports, or reading a good detective novel or anything tech related.</p>                
                </div>
            </div>
        )
    }
}

export default About;
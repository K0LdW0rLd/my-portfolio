import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <div className = 'box'>
                <div className ='greetings'>
                    <div className='hello'>
                        <p>Hello, World</p>
                    </div>
                </div>
                <div className='welcome'>
                    <h1>Welcome to my Portfolio</h1>
                    <p>Feel free to browse around and look at my current projects.</p>
                </div>
            </div>
        )
    }
}

export default Home;
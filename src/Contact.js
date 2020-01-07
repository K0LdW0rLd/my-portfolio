import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='contact-header'>
                    <h1>Contact Info</h1>
                    <p>If you like what you have seen or have any questions, please feel free to contact me.</p>
                </div>
                <div className='contact-list'>
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

export default Contact;
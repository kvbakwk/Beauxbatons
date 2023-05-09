import { useEffect } from 'react';
import { CallIcon, EmailIcon } from '../Icons'

import '../styles/contact.css'

const Contact = ({ show, setShow }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.contact').style.opacity = 1
        }, 400)
    }, [])

    return (
        <div
            className="contact"
            style={show ? { animationName: 'showContact' } : { animationName: 'hideContact' }}
            onClick={() => show ? setShow(false) : setShow(true)}
        >
            <div className="element">
                <CallIcon />
                (+48) 758 214 921
            </div>
            <div className="element">
                <CallIcon />
                (+48) 673 821 251
            </div>
            <div className="element">
                <EmailIcon />
                contact@goodiecodes.com
            </div>
        </div>
    );
}

export default Contact;
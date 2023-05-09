import { useEffect } from 'react';
import '../styles/copy.css'

const Copy = ({ show, setShow }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.copy').style.opacity = 1
        }, 400)
    }, [])

    return (
        <div
            className="copy"
            style={show ? { animationName: 'show' } : { animationName: 'hide' }}
            onClick={() => setShow(false)}
        >
            Skopiowano link do schowka
        </div>
    );
}

export default Copy;
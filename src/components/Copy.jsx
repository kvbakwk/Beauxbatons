import { useEffect } from 'react';
import '../styles/copy.css'

const Copy = ({ show, setShow }) => {

    useEffect(() => {
        if (show)
            setTimeout(() => {
                if (show)
                    setShow(false)
            }, 6000)
    }, [show, setShow])

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
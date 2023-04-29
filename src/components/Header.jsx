import { useEffect } from 'react';
import '../styles/header.css';

const Header = () => {

    useEffect(() => {
        loop()
    }, [])

    const loop = () => {

        const element = document.querySelector('#logo')
        setTimeout(() => {
            element.textContent = '_'
            setTimeout(() => {
                element.textContent = ''
                setTimeout(() => {
                    element.textContent = '_'
                    setTimeout(() => {
                        element.textContent = 'C_'
                        setTimeout(() => {
                            element.textContent = 'Co_'
                            setTimeout(() => {
                                element.textContent = 'Cod_'
                                setTimeout(() => {
                                    element.textContent = 'Code_'
                                    setTimeout(() => {
                                        element.textContent = 'Codes'
                                        setTimeout(() => {
                                            element.textContent = 'Codes'
                                            setTimeout(() => {
                                                element.textContent = 'Codes'
                                                setTimeout(() => {
                                                    element.textContent = 'Code_'
                                                    setTimeout(() => {
                                                        element.textContent = 'Cod_'
                                                        setTimeout(() => {
                                                            element.textContent = 'Co_'
                                                            setTimeout(() => {
                                                                element.textContent = 'C_'
                                                                setTimeout(() => {
                                                                    element.textContent = '_'
                                                                    setTimeout(() => {
                                                                        element.textContent = ''
                                                                        loop()
                                                                    }, 400)
                                                                }, 400)
                                                            }, 400)
                                                        }, 400)
                                                    }, 400)
                                                }, 400)
                                            }, 400)
                                        }, 10000)
                                    }, 400)
                                }, 400)
                            }, 400)
                        }, 400)
                    }, 400)
                }, 1000)
            }, 1000)
        }, 1000)

    }

    return (
        <div className="header">
            <main>
                <div className="logo">
                    Goodie<span id='logo'></span>
                </div>
                <div className="quote">
                    Witaj, interesuje Cię nasza firma? Pracuj dla nas!
                </div>
            </main>
            <div className="colorBar"></div>
        </div>
    );
}

export default Header;
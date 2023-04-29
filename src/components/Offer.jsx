import '../styles/offer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ArticleIcon from '@mui/icons-material/Article';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';

const Offer = () => {
    return (
        <div className="offer">
            <div className="info element">
                <div className="header">
                    Fullstack Developer (JavaScript)
                </div>
                <div className="parameters">
                    <div className="element">
                        <div className="icon">
                            <LocationOnIcon />
                        </div>
                        <div className="text">
                            <div className="title">
                                Lokalizacja firmy
                            </div>
                            <div className="desc">
                                ul. Karpia 56/58, Łódź
                            </div>
                        </div>
                    </div>
                    <div className="element">
                        <div className="icon">
                            <TimelapseIcon />
                        </div>
                        <div className="text">
                            <div className="title">
                                Wymiar pracy
                            </div>
                            <div className="desc">
                                Pełny etat
                            </div>
                        </div>
                    </div>
                    <div className="element">
                        <div className="icon">
                            <MapsHomeWorkIcon />
                        </div>
                        <div className="text">
                            <div className="title">
                                Typ pracy
                            </div>
                            <div className="desc">
                                Zdalna
                            </div>
                        </div>
                    </div>
                    <div className="element">
                        <div className="icon">
                            <MyLocationIcon />
                        </div>
                        <div className="text">
                            <div className="title">
                                Miejsce pracy
                            </div>
                            <div className="desc">
                                Polska
                            </div>
                        </div>
                    </div>
                    <div className="element">
                        <div className="icon">
                            <ArticleIcon />
                        </div>
                        <div className="text">
                            <div className="title">
                                Typ umowy
                            </div>
                            <div className="desc">
                                O pracę
                            </div>
                        </div>
                    </div>
                    <div className="element">
                        <div className="icon">
                            <TapAndPlayIcon />
                        </div>
                        <div className="text">
                            <div className="title">
                                Typ rekrutacji
                            </div>
                            <div className="desc">
                                Zdalna
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tech element">
                <div className="title">
                    Języki i technologie z których korzystamy
                </div>
                <div className="expected">
                    Wymagane
                </div>
                <div className="techs">
                    <div className="element">
                        JavaScript
                    </div>
                    <div className="element">
                        TypeScript
                    </div>
                    <div className="element">
                        Node.js
                    </div>
                    <div className="element">
                        React.js
                    </div>
                    <div className="element">
                        HTML
                    </div>
                    <div className="element">
                        CSS
                    </div>
                </div>
                <div className="expected">
                    Mile widziane
                </div>
                <div className="techs">
                    <div className="element">
                        Java
                    </div>
                    <div className="element">
                        Bootstrap
                    </div>
                    <div className="element">
                        Electron
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;
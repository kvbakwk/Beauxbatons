import '../styles/offer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ArticleIcon from '@mui/icons-material/Article';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import CodeIcon from '@mui/icons-material/Code';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import OfferParameter from './OfferParameter';
import OfferRequirement from './OfferRequirement.jsx';

const Offer = () => {
    return (
        <div className="offer">
            <div className="general element">
                <div className="header"> Fullstack Developer (JavaScript) </div>
                <div className="parameters">
                    <OfferParameter
                        icon={<LocationOnIcon sx={{ color: 'var(--iconColor)' }} />}
                        title='Lokalizacja firmy'
                        desc='ul. Karpia 56/58, Łódź' />
                    <OfferParameter
                        icon={<TimelapseIcon sx={{ color: 'var(--iconColor)' }} />}
                        title='Wymiar pracy'
                        desc='Pełny etat' />
                    <OfferParameter
                        icon={<MapsHomeWorkIcon sx={{ color: 'var(--iconColor)' }} />}
                        title='Typ pracy'
                        desc='Zdalna' />
                    <OfferParameter
                        icon={<MyLocationIcon sx={{ color: 'var(--iconColor)' }} />}
                        title='Miejsce pracy'
                        desc='Polska' />
                    <OfferParameter
                        icon={<ArticleIcon sx={{ color: 'var(--iconColor)' }} />}
                        title='Typ umowy'
                        desc='O pracę' />
                    <OfferParameter
                        icon={<TapAndPlayIcon sx={{ color: 'var(--iconColor)' }} />}
                        title='Typ rekrutacji'
                        desc='Zdalna' />
                </div>
            </div>
            <div className="tech element">
                <div className="title"> Języki i technologie z których korzystamy </div>
                <div className="expected"> Wymagane </div>
                <div className="techs">
                    <div className="element"> JavaScript </div>
                    <div className="element"> TypeScript </div>
                    <div className="element"> SQL </div>
                    <div className="element"> Node.js </div>
                    <div className="element"> React.js </div>
                    <div className="element"> CSS </div>
                    <div className="element"> GNU/Linux </div>
                </div>
                <div className="expected"> Mile widziane </div>
                <div className="techs">
                    <div className="element"> Java </div>
                    <div className="element"> Python </div>
                    <div className="element"> Bootstrap </div>
                    <div className="element"> Electron </div>
                    <div className="element"> PostgreSQL </div>
                    <div className="element"> AWS </div>
                </div>
            </div>
            <div className="info element">
                <div className="banner">
                    <CodeIcon sx={{ fontSize: '5rem' }} />
                    <span>O firmie</span>
                </div>
                <div className="text">
                    <p>
                        Jesteśmy GoodieCodes. U nas możesz pracować nad różnymi projektami w zależności od Twoich potrzeb, doświadczenia oraz potrzeb naszych. Na naszej stronie możesz zobaczyć zrealizowane
                        przez nas projekty. Rzeczy, nad którymi pracujemy to: aplikacje desktopowe, webowe i mobilne, programy, skrypty, pluginy czy boty.</p>
                </div>
            </div>
            <div className="requirements element">
                <div className="title">Nasze wymagania</div>
                <div className="required">
                    <OfferRequirement
                        icon={<ErrorOutlineIcon sx={{ color: '#913fe2' }} />}
                        requirement='6 miesięcy doświadczenia w implementacji i wdrażaniu rozwiązań webowych w oparciu o React.js'
                    />
                    <OfferRequirement
                        icon={<ErrorOutlineIcon sx={{ color: '#913fe2' }} />}
                        requirement='znajomość języka TypeScript, pozwalająca sprawnie odczytywać program w nim napisany'
                    />
                    <OfferRequirement
                        icon={<ErrorOutlineIcon sx={{ color: '#913fe2' }} />}
                        requirement='zaawansowana umięjętność korzystania z CSS'
                    />
                    <OfferRequirement
                        icon={<ErrorOutlineIcon sx={{ color: '#913fe2' }} />}
                        requirement='podstawowa umięjętność obsługi systemów GNU/Linux z poziomu terminalu'
                    />
                    <OfferRequirement
                        icon={<ErrorOutlineIcon sx={{ color: '#913fe2' }} />}
                        requirement='podstawowa umięjętność posługiwania się SQL'
                    />
                </div>
                <div className="title">Wymagania mile widziane</div>
                <div className="optional">
                    <OfferRequirement
                        icon={<CheckCircleOutlineIcon sx={{ color: '#4090eb' }} />}
                        requirement='znajomość języków programowania takich jak Java lub Python'
                    />
                    <OfferRequirement
                        icon={<CheckCircleOutlineIcon sx={{ color: '#4090eb' }} />}
                        requirement='znajomość frameworków webowych Bootstrap i/lub Electron'
                    />
                    <OfferRequirement
                        icon={<CheckCircleOutlineIcon sx={{ color: '#4090eb' }} />}
                        requirement='doświadczenie przy pracy z PostgreSQL i/lub AWS'
                    />
                </div>
            </div>
        </div>
    );
}

export default Offer;
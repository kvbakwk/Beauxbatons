import '../styles/offer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ArticleIcon from '@mui/icons-material/Article';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import CodeIcon from '@mui/icons-material/Code';

import OfferParameter from './OfferParameter';
import OfferRequirements from './OfferRequirements.jsx';
import OfferOptional from './OfferOptional.jsx';

const Offer = () => {
    return (
        <div className="offer">
            <div className="general element">
                <div className="header"> Fullstack Developer (JavaScript) </div>
                <div className="parameters">
                    <OfferParameter
                        icon={<LocationOnIcon />}
                        title='Lokalizacja firmy'
                        desc='ul. Karpia 56/58, Łódź' />
                    <OfferParameter
                        icon={<TimelapseIcon />}
                        title='Wymiar pracy'
                        desc='Pełny etat' />
                    <OfferParameter
                        icon={<MapsHomeWorkIcon />}
                        title='Typ pracy'
                        desc='Zdalna' />
                    <OfferParameter
                        icon={<MyLocationIcon />}
                        title='Miejsce pracy'
                        desc='Polska' />
                    <OfferParameter
                        icon={<ArticleIcon />}
                        title='Typ umowy'
                        desc='O pracę' />
                    <OfferParameter
                        icon={<TapAndPlayIcon />}
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
                    <div className="element"> Linux </div>
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
                    <span>O projekcie</span>
                </div>
                <div className="text">
                    <p>
                        Jesteśmy GoodieCodes. U nas możesz pracować nad różnymi projektami w zależności od Twoich potrzeb, doświadczenia oraz naszych potrzeb. Na naszej stronie możesz zobaczyć zrealizowane
                        przez nas projekty. Rzeczy, nad którymi pracujemy to: aplikacje desktopowe, webowe i mobilne, programy, skrypty, pluginy czy boty.</p>
                </div>
            </div>
            <div className="requirementsOptional">
                <main className="required">
                    <div className="required title">Nasze wymagania</div>
                        <OfferRequirements 
                            requirement='6 miesięcy doświadczenia w implementacji i wdrażaniu rozwiązań webowych w oparciu o JavaScript, React.js'
                        />
                        <OfferRequirements
                            requirement='podstawowa znajomość TypeScript'
                        />
                        <OfferRequirements
                            requirement='zaawansowana umięjętność korzystania z CSS'
                        />
                        <OfferRequirements
                            requirement='podstawowa umięjętność obsługi systemów GNU/Linux z poziomu terminalu'
                        />
                        <OfferRequirements
                            requirement='podstawowa umięjętność posługiwania się SQL'
                        />
                </main>
                <main className="optional">
                    <div className="optional title">Mile widziane</div>
                        <OfferOptional 
                            optional='znajomość Java'
                        />
                        <OfferOptional 
                            optional='znajomość Python'
                        />
                        <OfferOptional 
                            optional='znajomość Bootstrap'
                        />
                        <OfferOptional 
                            optional='znajomość Electron'
                        />
                        <OfferOptional 
                            optional='znajomość PostgreSQL'
                        />
                        <OfferOptional 
                            optional='znajomość AWS'
                        />
                </main>
            </div>
        </div>
    );
}

export default Offer;
import { Button, ButtonGroup } from "@mui/material";
import { CallIcon } from "../Icons";

import { General, Technologies, Information, Requirements, Duties, Benefits } from './offer/Offer'

import '../styles/main.css'

const Main = ({ setForm, copy, setCopy, setContact }) => {

    const handleClick = () => {
        navigator.clipboard.writeText('https://goodiecodes.com/')
        copy ? setCopy(false) : setCopy(true)
    }

    return (
        <div className="main">
            <div className="offer">
                <General />
                <Technologies />
                <Information />
                <Requirements />
                <Duties />
                <Benefits />
            </div>
            <div className="application">
                <div className="app-button">
                    <Button
                        id="app"
                        variant="contained"
                        onClick={() => setForm(true)}
                        disableElevation
                    >
                        Aplikuj
                    </Button>
                    <Button
                        id="contact"
                        variant="text"
                        onClick={() => setContact(true)}
                        disableElevation
                    >
                        <CallIcon />
                    </Button>
                </div>
                <div className="options">
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button>Drukuj</Button>
                        <Button onClick={handleClick}> Udostępnij </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
};


export default Main;
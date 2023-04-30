import { Button, ButtonGroup } from "@mui/material";
import Offer from "./Offer";
import '../styles/main.css'

const Main = () => {
    return (
        <div className="main">
            <Offer />
            <div className="application">
                <div className="app-button">
                    <Button variant="contained" color="secondary" disableElevation>Aplikuj</Button>
                </div>
                <div className="options">
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button>Drukuj</Button>
                        <Button>Udostępnij</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}

export default Main;
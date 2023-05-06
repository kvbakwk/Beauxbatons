import { useState } from "react";
import { Button, ButtonGroup, Popover } from "@mui/material";

import Offer from "./Offer";

import '../styles/main.css'

const Main = () => {

    const [shareOpen, setShareOpen] = useState(false)

    const handleClick = e => {
        navigator.clipboard.writeText('(??? or kvba.pl/)')
        setShareOpen(true)
    }

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
                        <Button onClick={handleClick}> Udostępnij </Button>
                    </ButtonGroup>
                </div>
            </div>
            <Popover
                open={shareOpen}
                onClose={() => setShareOpen(false)}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 20, left: 910 }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{ '& div:nth-child(3)': { backgroundColor: 'transparent' } }}
            >
                <div style={{ padding: '15px 20px', backgroundColor: '#481fa2', color: '#fff', borderRadius: '5px' }}>Skopiowano link do schowka</div>
            </Popover >
        </div>
    );
};


export default Main;
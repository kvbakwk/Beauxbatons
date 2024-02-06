import { Button, ButtonGroup } from "@mui/material";
import { CallIcon } from "../Icons";

import {
  General,
  Technologies,
  Information,
  Requirements,
  Duties,
  Benefits,
  Organization,
  Stages,
} from "./offer/Offer";

import "../styles/main.css";

const Main = ({ setForm, copy, setCopy, contact, setContact }) => {
  const handleClick = (variant) => {
    switch (variant) {
      case "copy":
        navigator.clipboard.writeText("https://goodiecodes.com/");
        copy ? setCopy(false) : setCopy(true);
        break;
      case "contact":
        contact ? setContact(false) : setContact(true);
        break;
      case "print":
        document.querySelectorAll(".print").forEach((element) => {
          element.style.opacity = 0;
        });
        window.print();
        document.querySelectorAll(".print").forEach((element) => {
          element.style.opacity = 1;
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="main">
      <div className="offer">
        <General />
        <Technologies />
        <Information />
        <Requirements />
        <Duties />
        <Benefits />
        <Organization />
        <Stages />
      </div>
      <div className="application">
        <div className="app-button">
          <Button
            id="app"
            variant="contained"
            onClick={() => setForm(true)}
            disableElevation>
            Aplikuj
          </Button>
          <Button
            id="contact"
            variant="text"
            onClick={() => handleClick("contact")}
            disableElevation>
            <CallIcon />
          </Button>
        </div>
        <div className="options">
          <ButtonGroup variant="text" aria-label="text button group">
            <Button onClick={() => handleClick("print")}>Drukuj</Button>
            <Button onClick={() => handleClick("copy")}> Udostępnij </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Main;

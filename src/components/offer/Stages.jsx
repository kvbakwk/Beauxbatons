import "../../styles/offer/stages.css";

import { AssignmentIcon } from "../../Icons";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

const Stages = () => {
  return (
    <div className="stages">
      <div className="label">
        <AssignmentIcon />
        Etapy rekrutacji
      </div>
      <div className="step">
        <LooksOneIcon />
        Wysłanie formularza
      </div>
      <div className="step">
        <LooksTwoIcon />
        Rozmowa telefoniczna
      </div>
      <div className="step">
        <Looks3Icon />
        Feedback i decyzja
      </div>
    </div>
  );
};

export default Stages;

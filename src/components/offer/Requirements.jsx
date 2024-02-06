import "../../styles/offer/requirements.css";

import { ErrorOutlineIcon, CheckCircleOutlineIcon } from "../../Icons";

const Requirements = () => {
  const requirements = {
    required: [
      "6 miesięcy doświadczenia w implementacji i wdrażaniu rozwiązań webowych w oparciu o React.js.",
      "Znajomość języka TypeScript, pozwalająca sprawnie odczytywać program w nim napisany.",
      "Zaawansowana umięjętność korzystania z CSS.",
      "Podstawowa umięjętność obsługi systemów GNU/Linux z poziomu terminalu.",
      "Podstawowa umięjętność posługiwania się SQL.",
    ],
    optional: [
      "Znajomość języków programowania takich jak Java lub Python.",
      "Znajomość frameworków webowych Bootstrap i/lub Electron.",
      "Doświadczenie przy pracy z PostgreSQL i/lub AWS.",
    ],
  };

  return (
    <div className="requirements element">
      <div className="title">Nasze wymagania</div>
      <div className="required">
        {requirements.required.map((requirement) => (
          <div className="requirement" key={requirement}>
            <ErrorOutlineIcon sx={{ color: "#913fe2" }} />
            {requirement}
          </div>
        ))}
      </div>
      <div className="title">Wymagania mile widziane</div>
      <div className="optional">
        {requirements.optional.map((requirement) => (
          <div className="requirement" key={requirement}>
            <CheckCircleOutlineIcon sx={{ color: "#4090eb" }} />
            {requirement}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requirements;

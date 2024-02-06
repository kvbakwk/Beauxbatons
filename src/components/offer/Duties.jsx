import "../../styles/offer/duties.css";

import { ErrorOutlineIcon } from "../../Icons";

const Duties = () => {
  const duties = [
    "Praca przy tworzeniu oprogramowania, z grupą programistów, w systemie Scrum.",
    "Utrzymywanie i rozwój istniejącego kodu oraz wdrażanie zupełnie nowych rozwiązań.",
    "Tworzenie dokumentacji do nowo utworzonego kodu, praca z kodem stworzonym już wcześniej.",
  ];

  return (
    <div className="duties element">
      <div className="title">Twój zakres obowiązków</div>
      {duties.map((duty) => (
        <div className="duty" key={duty}>
          <ErrorOutlineIcon sx={{ color: "#913fe2" }} />
          {duty}
        </div>
      ))}
    </div>
  );
};

export default Duties;

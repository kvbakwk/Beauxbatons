import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ApplicationForm from "./components/ApplicationForm";

function App() {

  const [form, setForm] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark)
      document.querySelector('body').className = "dark"
    else
      document.querySelector('body').className = ""
  }, [dark])

  return (
    <>
      <Header />
      <Main setForm={setForm} />
      <ApplicationForm show={form} setShow={setForm} />
      <div className="switch" onClick={() => { setDark(!dark) }}></div>
    </>
  );
}

export default App;
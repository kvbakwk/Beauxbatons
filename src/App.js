import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import Copy from "./components/Copy";
import Contact from "./components/Contact"

function App() {

  const [form, setForm] = useState(false)
  const [copy, setCopy] = useState(false)
  const [contact, setContact] = useState(false)
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
      <Main
        setForm={setForm}
        copy={copy}
        setCopy={setCopy}
        contact={contact}
        setContact={setContact}
      />
      <Form show={form} setShow={setForm} />
      <Copy show={copy} setShow={setCopy} />
      <Contact show={contact} setShow={setContact} />
      <div className="switch" onClick={() => { setDark(!dark) }}></div>
    </>
  );
}

export default App;
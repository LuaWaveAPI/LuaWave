import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import PanelAdmin from "./components/PanelAdmin/PanelAdmin.jsx";
import logoLuaWave from "./img/logoLuaWave.png";
import { useState } from "react";
import Alerts from "./components/Alerts/Alerts";

function App() {
  const [errorLog, setErrorLog] = useState("");
  const [alertText, setAlertText] = useState(false);


  return (
    <>
      {/* Alert personalizados */}
      {alertText && <Alerts
        setErrorLog={setErrorLog}
        setAlertText={setAlertText}
        errorLog={errorLog} />}

      <div className="estructura">
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<PanelAdmin />} />
          </Routes>
        </main>
      </div>

      {/*  
      <header className="headerContainer">
      
      */}
    </>
  );
}

export default App;

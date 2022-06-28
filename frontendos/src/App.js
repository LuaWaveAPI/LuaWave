import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import PanelAdmin from "./components/PanelAdmin/PanelAdmin.jsx";
import logoLuaWave from "./img/logoLuaWave.png";

function App() {
  return (
    <>
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

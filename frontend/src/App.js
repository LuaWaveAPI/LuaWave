import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Test from "./views/test/Test";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Skate from "./views/skate/Skate";
import Surf from "./views/surf/Surf";
import Carrito from "./views/Carrito/Carrito";
import logoLuaWave from "./img/logoLuaWave.png";
import carritoimg from "./img/carrito.png";
import Contact from "./views/contact/Contact";
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
            <Route path="/" element={<Home setErrorLog={setErrorLog}
              setAlertText={setAlertText} />} />
            <Route path="/surf/" element={<Surf setErrorLog={setErrorLog}
              setAlertText={setAlertText} />} />
            <Route path="/skate/" element={<Skate setErrorLog={setErrorLog}
              setAlertText={setAlertText} />} />
            <Route path="/about/" element={<About setErrorLog={setErrorLog}
              setAlertText={setAlertText} />} />
            <Route path="/contact/" element={<Contact setErrorLog={setErrorLog}
              setAlertText={setAlertText} />} />
            <Route path="/test/" element={<Test setErrorLog={setErrorLog}
              setAlertText={setAlertText} />} />
            <Route path="/carrito/" element={<Carrito setErrorLog={setErrorLog}
              setAlertText={setAlertText} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

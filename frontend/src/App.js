import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Test from "./views/test/Test";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/Contact/Contact";
import Skate from "./views/skate/Skate";
import Surf from "./views/surf/Surf";
import Carrito from "./views/Carrito/Carrito";
import Panel from "./views/admin/paneladmin";
import logoLuaWave from "./img/logoLuaWave.png";
import carritoimg from "./img/carrito.png";

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
            <Route path="/" element={<Home />} />
            <Route path="/surf/" element={<Surf />} />
            <Route path="/skate/" element={<Skate />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/test/" element={<Test />} />
            <Route path="/carrito/" element={<Carrito />} />
            <Route path="/panel-admin/" element={<Panel />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/*  
      <header className="headerContainer">
      
      */}
    </>
  );
}

export default App;

import "./App.css";
import Test from "./views/test/Test";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import Skate from "./views/skate/Skate";
import Surf from "./views/surf/Surf";
import Carrito from "./views/Carrito/Carrito";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import logoLuaWave from "./img/logoLuaWave.png";
import carrito from "./img/carrito.png";

function App() {
  return (
    <>
      <header>
        <nav className="navFondo">
          <div className="divLuaWaveNave">
            <Link to={"/"}>
              <img class="logo" src={logoLuaWave} alt="logo"></img>
            </Link>
            <Link to={"/"}>
              <p class="sizeP">LuaWave</p>
            </Link>
            <Link to={"/surf/"}>
              <p class="sizeP">Surf</p>
            </Link>
            <Link to={"/skate/"}>
              <p class="sizeP">Skate</p>
            </Link>
            <Link to={"/about/"}>
              <p class="sizeP">About</p>
            </Link>
            <Link to={"/contact/"}>
              <p class="sizeP">Contacto</p>
            </Link>
            <Link to={"/test/"}>
              <p class="sizeP">Test</p>
            </Link>
            <Link to={"/carrito/"}>
              <img class="carrito" src={carrito} alt="carrito"></img>
            </Link>
          </div>
          <h1>Probando</h1>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surf/" element={<Surf />} />
        <Route path="/skate/" element={<Skate />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/test/" element={<Test />} />
        <Route path="/carrito/" element={<Carrito />} />
      </Routes>
    </>
  );
}

export default App;

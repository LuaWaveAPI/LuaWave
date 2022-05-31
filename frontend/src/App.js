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
import iconoFooter1 from "./img/iconoFooter1.png";
import iconoFooter2 from "./img/iconoFooter2.png";
import iconoFooter3 from "./img/iconoFooter3.png";
import iconoFooter4 from "./img/iconoFooter4.png";
import iconoFooter5 from "./img/iconoFooter5.png";
import iconoFooter6 from "./img/iconoFooter6.png";
import iconoFooter7 from "./img/iconoFooter7.png";
import iconoFooter8 from "./img/iconoFooter8.png";
import iconoFooter9 from "./img/iconoFooter9.png";

function App() {
  return (
    <>
      <header>
        {/* <nav> */}
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
      {/* contenedor <main> */}
      <main>

      </main>
      {/* <footer> */}
      <footer>
        <div class="footerFondo">
        <a class="aEnlace" href="https://www.instagram.com/" target="_blank">
                <img class="iconos" src={iconoFooter1} alt="iconoI"></img>
            </a>
            <a class="aEnlace" href="https://es-es.facebook.com/" target="_blank">
                <img class="iconos" src={iconoFooter2} alt="iconoF"></img>
            </a>
            <a class="aEnlace" href="https://www.youtube.com/" target="_blank">
                <img class="iconos" src={iconoFooter3} alt="iconoY"></img>
            </a>
            <a class="aEnlace" href="https://twitter.com/" target="_blank">
                <img class="iconos" src={iconoFooter4} alt="iconoT"></img>
            </a>
            <a class="aEnlace" href="https://www.pinterest.es/" target="_blank">
                <img class="iconos" src={iconoFooter5} alt="iconoP"></img>
            </a>
            <a class="aEnlace" href="https://outlook.live.com/owa/" target="_blank">
                <img class="iconos" src={iconoFooter6} alt="iconoE"></img>
            </a>
            <a class="aEnlace" href="https://www.whatsapp.com/" target="_blank">
                <img class="iconos" src={iconoFooter7} alt="iconoW"></img>
            </a>
            <a class="aEnlace" href="tel:881917587" target="_blank">
                <img class="iconos" src={iconoFooter8} alt="iconoT"></img>
            </a>
            <a class="aEnlace" href="https://www.google.es/maps/preview" target="_blank">
                <img class="iconos" src={iconoFooter9} alt="iconoM"></img>
            </a>
        </div>
      </footer>

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

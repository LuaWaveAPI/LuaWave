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

function App() {
  return (
    <>
      <header>
        <h1>Vista de la web</h1>
        <nav>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
          <Link to={"/surf/"}>
            <button>Surf</button>
          </Link>
          <Link to={"/skate/"}>
            <button>Skate</button>
          </Link>
          <Link to={"/about/"}>
            <button>About</button>
          </Link>
          <Link to={"/contact/"}>
            <button>Contacto</button>
          </Link>
          <Link to={"/test/"}>
            <button>Test</button>
          </Link>

          <Link to={"/carrito/"}>
            <button>Carrito</button>
          </Link>
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

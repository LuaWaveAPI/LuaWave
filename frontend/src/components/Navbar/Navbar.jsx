import { Link } from 'react-router-dom'
import style from './Navbar.module.css';

function Navbar() {
    return (
        <>
            <div>
                <div id="Navbar" className={style.navegador}>
                    <Link to={'/'}>
                        <p>LuaWave</p>
                    </Link>
                    <Link to={'/surf/'}>
                        <p>Surf</p>
                    </Link>
                    <Link to={'/skate/'}>
                        <p>Skate</p>
                    </Link>
                    <Link to={'/about/'}>
                        <p>About</p>
                    </Link>
                    <Link to={'/contact/'}>
                        <p>Contact</p>
                    </Link>
                    <Link to={'/test/'}>
                        <p>Test</p>
                    </Link>
                    <Link to={'/carrito/'}>
                        <img className={style.carrito} src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrito.png" alt="carrito" />
                    </Link>
                    <Link to={'/panel-admin/'}>
                        <p>Panel</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
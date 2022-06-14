import { Link } from 'react-router-dom'
import style from './Navbar.module.css';

function Navbar() {
    return (
        <>
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
                    <p>Carrito</p>
                </Link>
                <Link to={'/panel-admin/'}>
                    <p>Panel</p>
                </Link>
            
            </div>
        </>
    )
}

export default Navbar
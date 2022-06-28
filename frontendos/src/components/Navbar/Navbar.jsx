import { Link } from 'react-router-dom'
import style from './Navbar.module.css';

function Navbar() {
    return (
        <>
            <div id="Navbar" className={style.navegador}>
                <div className={style.textoyLogo}>
                    <Link to={'/'}>
                        <img className={style.logo} src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/logoLuaWaveWhite.png" alt="logo" />
                    </Link>
                    <Link to={'/backoffice/'}>
                        <p className={style.textoBlack}>Panel Admin</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
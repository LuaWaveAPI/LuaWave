import { Link } from 'react-router-dom'
import style from './Navbar.module.css';

function Navbar() {
    return (
        <>
            <div>
                <div id="Navbar" className={style.navegador}>
                    <Link to={'/'}>
                        <img className={style.logo} src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/logoLuaWave.png" alt="logo" />
                    </Link>
                    <Link to={'/'}>
                        <p>LuaWave</p>
                    </Link>
                    <Link to={'/contact/'}>
                        <p>Contact</p>
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
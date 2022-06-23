import style from '../PanelAdmin/PanelAdmin.module.css'
import { Link } from 'react-router-dom'

function PanelAdmin() {
    return (
        <>

            <div>
                <div className={style.navegador}>
                    <Link to={'/'}>
                        <p className={style.textoBlack}>LuaWave</p> 
                    </Link>
                    <Link to={'/panel-admin/'}>
                        <p className={style.textoBlack}>Panel Admin</p>
                    </Link>
                </div>
            </div>
            <div>
            <h1 className={style.marginPanel}>Panel Admin</h1>
            </div>
        </>
    )
}

export default PanelAdmin

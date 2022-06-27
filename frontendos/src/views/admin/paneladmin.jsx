import PanelAdmin from "../../components/PanelAdmin/PanelAdmin";
import style from './paneladmin.module.css';

function Panel() {
    return (
        <>
            <div className={style.panel}>
                <PanelAdmin />
            </div>
        </>
    )
}

export default Panel
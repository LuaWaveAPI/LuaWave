import style from './Alerts.module.css';
import { useEffect } from "react"

function Alerts ({setAlertText, setErrorLog, errorLog}){
    function cleanText(){
        setAlertText(false);
        setErrorLog("")
    }
    useEffect(()=>{setTimeout(cleanText, 5000)})
    return(
        <>
            <div className={style.alert}>
            <h1 className={style.alertText}>{errorLog}</h1>
            </div>
        </>
    )
}
export default Alerts
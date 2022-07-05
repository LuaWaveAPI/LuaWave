import style from './Alerts.module.css';
import { useEffect } from "react"

function Alerts ({setAlertText, setErrorLog, errorLog}){
    function cleanText(){
        setAlertText(false);
        setErrorLog("")
    }
    useEffect(()=>{setTimeout(cleanText, 35000)})
    return(
        <>
            <div className="alert">
            <h1 className="alertText">{errorLog}</h1>
            </div>
        </>
    )
}
export default Alerts
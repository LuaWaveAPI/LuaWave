import { luawave } from "../models/luawaveDB.mjs";

export function loginCreateToken(req,res){
    try{
    const{name,pass} = req.body
    luawave.get(`SELECT Name,Password FROM Staff Where Name="${name}" AND Password="${pass}" `, 
    (err,data)=>{
        if (err) throw err;
        if (data){
            console.log(data)
            res.send(data)
        }else{
            res.send("usuario no encontrado")
        }
    })

    }catch{
        insertLog(
            Date.now(),
            "/Articles/", 
            JSON.stringify(err.message),
            JSON.stringify(err),
            (error)=> response.send(error)
          )
        response.status(500);
        return;
    }
}
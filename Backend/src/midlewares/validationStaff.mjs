import {config} from "dotenv"


export function authMiddleware (req, res, next) {
    try {
        config()
        const secret = process.env.BCRYPT_SECRET
        const [ method, token ] = req.headers.authorization.split(" ")
        const validAuth = jwt.verify(token,secret)
        if ( validAuth ) {
            const { username } = validAuth
            res.locals["username"] = username // Paso el user name para uso en los controllers
            next()
        } 
    } catch (err) {
        res.sendStatus(401)
    }
}


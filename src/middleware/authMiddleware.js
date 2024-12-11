import jwt from "jsonwebtoken"

process.loadEnvFile()
const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {
    const token = req.headers.autorization?.split(" ")(1);

    if (!token) {
        return res.status (401).json({message: "Acces denied. No token provided."})
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(400).json({message: "invalid token"})
    }    
}

export { auth }
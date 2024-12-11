import authModel from "../models/authModel.js"
import jwt from "jsonwebtoken"
import { validationResult } from "express-validator"

process.loadEnvFile()
const JWT_SECRET = process.env.JWT_SECRET

//Funcion para registrar un usuario
const register = async (req, res) => {

    try {
        const { username, password } = req.body

        const errors = validationResult(req); 
        if (!errors.isEmpty()) { 
            return res.status(400).json({ errors: errors.array() }); 
        }

        if (!username || !password) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        const registeredUser = await authModel.register({ username, password })
        if (registeredUser === null) {
            return (res.status(400).json("User already exist"))
        };
        return res.status(201).json({
            user: { username },
            message: "User registered successfully"
        })
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}
// Funcion para loggear un usuario
const login = async (req, res) => {

    const errors = validationResult(req); 
    if (!errors.isEmpty()) { 
        return res.status(400).json({ errors: errors.array() }); 
    }

    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({ error: 'All fields are required' })
        }
        const user = await authModel.login({ username, password })
       
        if (!user) {
            return res.status(401).json({ message: "invalid username or password" })
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn:'5h'})


        return res.status(200).json({ message: "Login successful", user: { id: user._id, username: user.username }, token })

    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

export { register, login }
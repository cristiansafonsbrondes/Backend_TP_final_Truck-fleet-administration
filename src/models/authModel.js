import mongoose from "mongoose";
import bcryptjs from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 5,
        maxlength: 20, match: /^[a-zA-Z0-9_]+$/}, // Solo alfanuméricos y guiones bajos
    password: { type: String, require: true, minlength: 8 }
}, { versionKey: false })

const User = mongoose.model("user", userSchema)

const register = async (dataUser) => {
    const { username, password } = dataUser
    
    try {
        // Buscamos un usuario con el mismo nombre de usuario
        const existingUser = await User.findOne({username})
        if (existingUser) {
            return null;
        }
        // Hasheamos la contraseña
        const hashedPassword = await bcryptjs.hash(password, 10)
        // Creamos un nuevo usuario con la contraseña hasheada
        const newUser = new User({
            username,
            password: hashedPassword
        })  
        // Guardamos el nuevo usuario en la base de datos
        const registeredUser = await newUser.save()    
        return { status: 201, message: "User registered successfully", data: registeredUser }

    } catch (error) {
        return {status: 500, message: `Error registering user: ${error.message}`}
    }
}


const login = async (dataUser) => {
    const { username, password } = dataUser
    
    try {
        const validUsername = await User.findOne({ username})
        if (!validUsername) return null //({ status: (404), message: "User not found" })

        const validPassword = bcryptjs.compare(password, validUsername.password)
        if (!validPassword) {return ({ status: (401), message: "Wrong password" })}

       return validUsername 
      
    } catch (error) {
        return {status: 500, message: `User login error: ${error.message}`}
    }
}
export default { register, login }
import {check} from "express-validator"

// Reglas de validación para registro de usuario
export const userValidatorData = [
    check('username')
        .isString().withMessage('El nombre de usuario debe ser una cadena de texto')
        .isLength({ min: 5, max: 20 }).withMessage('El nombre de usuario debe tener entre 5 y 20 caracteres')
        .matches(/^[a-zA-Z0-9_]+$/).withMessage('El nombre de usuario solo puede contener caracteres alfanuméricos y guiones bajos')
        .notEmpty().withMessage('El nombre de usuario es obligatorio'),
    check('password')
        .isString().withMessage('La contraseña debe ser una cadena de texto')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
        .notEmpty().withMessage('La contraseña es obligatoria')
];



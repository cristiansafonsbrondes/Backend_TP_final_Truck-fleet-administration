import { check } from "express-validator";

// Definir reglas de validación
 const addTruckValidate = [
    check('vin')
        .isString().withMessage('VIN debe ser una cadena de texto').notEmpty().withMessage('VIN es obligatorio').isLength({ min: 1 }),
    check('truckNumber')
        .isInt().withMessage('Número de camión debe ser un número entero').notEmpty().withMessage('Número de camión es obligatorio'),
    check('make')
        .isString().withMessage('Marca debe ser una cadena de texto').notEmpty().withMessage('Marca es obligatoria'),
    check('model')
        .isString().withMessage('Modelo debe ser una cadena de texto').notEmpty().withMessage('Modelo es obligatorio'),
    check('year')
        .isInt({ min: 1900, max: new Date().getFullYear() }).withMessage('Año debe ser un número entero válido').notEmpty().withMessage('Año es obligatorio')
];

 const updateTruchValidate = [
    check('vin')
        .optional().isString().withMessage('VIN debe ser una cadena de texto').notEmpty().withMessage('VIN es obligatorio').isLength({ min: 1 }),
    check('truckNumber')
        .optional().isInt().withMessage('Número de camión debe ser un número entero').notEmpty().withMessage('Número de camión es obligatorio'),
    check('make')
        .optional().isString().withMessage('Marca debe ser una cadena de texto').notEmpty().withMessage('Marca es obligatoria'),
    check('model')
        .optional().isString().withMessage('Modelo debe ser una cadena de texto').notEmpty().withMessage('Modelo es obligatorio'),
    check('year')
        .optional().isInt({ min: 1900, max: new Date().getFullYear() }).withMessage('Año debe ser un número entero válido').notEmpty().withMessage('Año es obligatorio')
];

export default {addTruckValidate, updateTruchValidate}
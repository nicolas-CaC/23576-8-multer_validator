import { body } from 'express-validator'

export const loginMiddleware = [
    body('email')
        .isEmail()
        .withMessage('mail inválido'),
    body('password')
        .isLength({ min: 4, max: 8 })
        .withMessage('debe tener al menos 4 caracteres y menos de 8 caracteres.')
]
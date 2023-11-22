import express from 'express'
import { loginMiddleware, validatorMiddleware } from './../middlewares/index.js'


export const formRouter = express.Router()

formRouter.post('/',
    loginMiddleware,
    validatorMiddleware,
    (req, res) => res.status(200).send('si'))
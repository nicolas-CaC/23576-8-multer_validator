import dotenv from 'dotenv'
import express from 'express'
import { formRouter, mainRouter } from './src/routes/index.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', mainRouter)
app.use('/form', formRouter)


app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))
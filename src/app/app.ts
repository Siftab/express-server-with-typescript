// const express = require('express')
import express, { Request, Response } from 'express'
const app = express()


// using parser
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send('typescript Server')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    res.status(500).send("hitted post Route")
})

export default app;
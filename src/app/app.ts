// const express = require('express')
import express, { Request, Response } from 'express'
const app = express()


// using parser
app.use(express.json())
app.use(express.text())


app.get('/', (req: Request, res: Response) => {
    res.send('typescript Server')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    res.status(500).send("hitted post Route")
})
app.get('/get-data', (req: Request, res: Response) => {
    console.log(req.body)
    res.status(404).send("have your data")
})
// app.get('/error', (req: Request, res: Response) => {
//     try { res.send(something) }
//     catch (err) {
//         // console.log(err)
//         res.status(404).send({ status: "failed to get data" })
//     }
// })

export default app;
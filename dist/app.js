"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// using parser
app.use(express_1.default.json());
app.use(express_1.default.text());
app.get('/', (req, res) => {
    res.send('typescript Server');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.status(500).send("hitted post Route");
});
app.get('/get-data', (req, res) => {
    console.log(req.body);
    res.status(404).send("have your data");
});
// app.get('/error', (req: Request, res: Response) => {
//     try { res.send(something) }
//     catch (err) {
//         // console.log(err)
//         res.status(404).send({ status: "failed to get data" })
//     }
// })
exports.default = app;

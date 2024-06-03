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
app.get('/', (req, res) => {
    res.send('typescript Server');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.status(500).send("hitted post Route");
});
exports.default = app;

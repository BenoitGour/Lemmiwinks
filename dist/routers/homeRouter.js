"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
exports.homeRouter = (0, express_1.Router)();
exports.homeRouter.get('/', function (req, res, next) {
    console.log('homeRouter');
    res.render('home', { title: 'Test', message: 'Hello World' });
});

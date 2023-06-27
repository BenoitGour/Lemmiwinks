"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const homeRouter_1 = require("./routers/homeRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.set('view engine', 'pug');
app.set('views', './views');
app.use('/', homeRouter_1.homeRouter);
// app.get('/', (req: Request, res: Response) => {
// 	res.send('Express + TypeScript Server test');
// });
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

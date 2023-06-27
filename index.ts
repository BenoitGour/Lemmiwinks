import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { homeRouter } from './routers/homeRouter';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;



app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', homeRouter);




// app.get('/', (req: Request, res: Response) => {
// 	res.send('Express + TypeScript Server test');
// });

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
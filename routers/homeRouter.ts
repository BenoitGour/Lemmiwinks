import express, { Express, Request, Response, Router } from 'express';
export const homeRouter = Router();

homeRouter.get('/', function (req, res, next) {
	console.log('homeRouter');
	res.render('home', { title: 'Test', message: 'Hello World' });
});


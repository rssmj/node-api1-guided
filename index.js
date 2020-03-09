// similar to import express from 'express'

const express = require('express');
const shortid = require('shortid');
const server = express();

let lessons = [];
let hubs = [];

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running...'})
})

// write a GET /hello endpoint that returns an object like so: { hello: 'Web 27'}
server.get('/hello', (req, res) => {
	res.status(200).json({ hello: 'Web 27' });
});

server.get('/api/hubs', (req, res) => {
	res.status(200).json(hubs);
});

server.post('/api/lessons', (req, res) => {
	// axios.post(/api/hubs, data) <-- the data shows upas the req.body on the server
	// validate that the lessonInfo is correct before saving
	const lessonInfo = req.body;
	lessonInfo.id = shortid.generate();
	lessons.push(lessonInfo);
	res.status(201).json(lessonInfo);
});

server.post('/api/hubs', (req, res) => {
	const hubInfo = req.body;
	hubInfo.id = shortid.generate();
	hubs.push(hubInfo);
	res.status(201).json(hubInfo);
});

const PORT = 5000;
server.listen(PORT, () =>
	console.log(`\n ** API running on http://localhost:${PORT} **\n`)
);

// to run server use: node index.js

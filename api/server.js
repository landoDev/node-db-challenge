const express = require('express');
const projectRouter = require('../projects/project-router')
const resourceRouter = require('../resources/resources-router')
const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter)
server.get('/', (req, res) =>{
    res.send(`<h1>Lando\'s Project API</h1>`)
});

module.exports = server;
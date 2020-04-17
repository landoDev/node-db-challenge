const express = require('express');
const Project = require('./projects-model');
const Resource = require('./resources-model');
const router = express.Router();

router.get('/', (req, res) => {
    Project.findAll()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({error: 'Could not get projects'})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Project.findById(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({error: 'Could not get project'})
    })

})

router.post('/', (req, res) => {
    const newProject = req.body;
    Project.create(newProject)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({error: 'Could create new project'})
    })
})

router.post('/:id/resources', (req, res) => {
    const newResource = req.body;
    Resource.create(newResource)
    Project.create(newProject)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({error: 'Could create new project'})
    })
})

module.exports = router;
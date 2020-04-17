const express = require('express');
const Resource = require('../projects/resources-model');
const router = express.Router();

router.get('/', (req, res) => {
    Resource.findAll()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({error: 'Could not get resources'})
    })
})

router.post('/', (req, res) => {
    const newResource = req.body;
    Resource.create(newResource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({error: 'Could create new resource'})
    })
})
module.exports = router;
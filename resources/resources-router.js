const express = require('express');
const Resource = require('../projects/resources-model');
const router = express.Router();

router.get('/', (req, res) => {
    Resource.findAll()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({error: 'Could not get projects'})
    })
})

module.exports = router;
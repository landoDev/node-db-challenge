const express = require('express');
const Project = require('./projects-model');
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

router.post('/:id', (req, res) => {
    const newTask = req.body;
    Project.addTask(newTask)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({error: 'Could create new task'})
    })
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
    console.log('before promise')
    Project.getTasks(id)
    .then(task => {
      if (task.length) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Could not find the tasks for this project' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });

})



module.exports = router;
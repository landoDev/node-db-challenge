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

router.post('/:id/tasks', (req, res) => {
    const newTask = req.body;
    const { id } = req.params;
    Project.addTask(newTask, id)
    .then(task => {
        console.log('in promise', task)
        res.status(201).json(task)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Couldn\'t  create new task'})
    })
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
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
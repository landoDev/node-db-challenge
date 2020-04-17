const db = require('../data/db-config');

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
    addTask,
    getTasks
};

function findAll() {
    return db('projects');
}

function findById(id){
    return db('projects').where({id}).first();
}

function create(data) {
    return db('projects')
    .insert(data, "id") 
    .then(([id]) => {
        return findById(id); 
    })
}

function update(id, update) {
    return db('projects').where({ id }).update(update)
}

function remove(id) {
    return db('projects').where({ id }).del()
}

function addTask(data) {
    return db('tasks')
    .insert(data, "id") 
    .then(([id]) => {
        return findById(id); 
    })
}

function getTasks(id) {
    console.log('in helper', id)
    // select projects.name, projects.description, tasks.description from tasks
    // JOIN projects on tasks.project_id = projects.id
    // where projects.id = 1
    // ORDER by tasks.id
    return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .where('projects.id', id)
    .select('projects.name','projects.description', 'tasks.description')
    .orderBy('tasks.id')
}
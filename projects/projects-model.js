const db = require('../data/db-config');

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
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
const db = require('../data/db-config')

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};

function findAll() {
    return db('resources');
}

function findById(id){
    return db('resources').where({id}).first();
}

function create(data) {
    return db('resources')
    .insert(data, "id") 
    .then(([id]) => {
        return findById(id); 
    })
}

function update(id, update) {
    return db('resources').where({ id }).update(update)
}

function remove(id) {
    return db('resources').where({ id }).del()
}
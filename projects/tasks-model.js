module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};

function findAll() {
    return db('tasks');
}

function findById(id){
    return db('tasks').where({id}).first();
}

function create(data) {
    return db('tasks')
    .insert(data, "id") 
    .then(([id]) => {
        return findById(id); 
    })
}

function update(id, update) {
    return db('tasks').where({ id }).update(update)
}

function remove(id) {
    return db('tasks').where({ id }).del()
}
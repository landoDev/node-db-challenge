
exports.seed = function(knex) {

  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'download dependencies and initialize knex',
          project_id: 1
        },
        {
          description: 'run migrations to make tables. run migrate:latest to get db up',
          project_id: 1
        },
        {
          description: 'run make seeds command and build seed data. run seeds',
          project_id: 1
        },
        {
          description: 'CRACK A BEER. YEE YEE!',
          project_id: 1
        }
      ]);
    });
};

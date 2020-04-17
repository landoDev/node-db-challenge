
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'Computer',
          description: 'Macbook',
          project_id: 1
        },
        {
          name: 'VS Code',
          description: 'IDE',
          project_id: 1
        },
        {
          name: 'Coors Light',
          description: 'Ol\' faithful. Mountain cold refreshment',
          project_id: 1
        },

      ]);
    });
};

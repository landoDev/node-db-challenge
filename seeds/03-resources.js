
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'Computer',
          description: 'Macbook',
        },
        {
          name: 'VS Code',
          description: 'IDE',
        },
        {
          name: 'Coors Light',
          description: 'Ol\' faithful. Mountain cold refreshment',
        },

      ]);
    });
};

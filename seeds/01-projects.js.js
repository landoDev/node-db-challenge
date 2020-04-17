
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Build a database',
          description: 'Get this sprint challenge knocked out so you can weekend properly'
        }
      ]);
    });
};

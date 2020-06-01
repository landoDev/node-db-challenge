

exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 255).unique().notNullable();
    tbl.text('description', 255);
    tbl.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('tasks', tbl =>{
      tbl.increments();
      tbl.string('description', 255).unique().notNullable();
      tbl.boolean('completed').notNullable().defaultTo(false); // try using 0 instead of false, showing 0 in db
      // fk
      tbl.integer('project_id', 100)
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  .createTable('resources', tbl =>{
    tbl.increments();
    tbl.string('name', 255).unique().notNullable();
    tbl.text('description', 255);
  })
  .createTable('project_resources', tbl =>{
    tbl.increments();
    // fk
    tbl.integer('project_id', 100)
    .unsigned()
    .references('id')
    .inTable('projects')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    tbl.integer('resource_id', 100)
    .unsigned()
    .references('id')
    .inTable('resources')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  });

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('task')
  .dropTableIfExists('projects');
};

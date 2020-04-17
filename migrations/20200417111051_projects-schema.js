
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments().primary();
      tbl.string('name', 255).unique().notNullable();
      tbl.text('description', 255);
      tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('tasks', tbl =>{
        tbl.increments().primary();
        tbl.string('description', 255).unique().notNullable();
        tbl.boolean('completed').notNullable().defaultTo(false); // try using 0 instead of false, showing 0 in db
        // fk
        tbl.integer('project_id', 100)
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('resources', tbl =>{
      tbl.increments().primary();
      tbl.string('name', 255).unique().notNullable();
      tbl.text('description', 255);
      // fk
      tbl.integer('project_id', 100)
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    });
  
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources')
    .dropTableIfExists('task')
    .dropTableIfExists('projects');
  };
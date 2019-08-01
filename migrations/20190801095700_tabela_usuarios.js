
exports.up = function(knex, Promise) {
  return knex.schema.createTable('usuarios', table => {
    table.increments('id').primary()
    table.string('nome').notNull()
    table.string('email').notNull().unique()
    table.string('senha').notNull().notNull().defaultTo(true)
    table.timestamp('data_criacao').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('usuarios')
};

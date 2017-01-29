
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', function(table){
    table.increments().notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.bigInteger('price').notNullable();
    table.text('item_image').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classifieds');
};

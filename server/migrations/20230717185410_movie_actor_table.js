/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema.createTable('movie_actor', table => {
    table.increments('id');
    table.integer('movie_id');
    table.foreign('movie_id').references('movie.id');
    table.integer('actor_id');
    table.foreign('actor_id').references('actor.id');
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movie_actor');
};

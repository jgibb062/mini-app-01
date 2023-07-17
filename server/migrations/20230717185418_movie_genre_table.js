/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema.createTable('movie_genre', table => {
    table.increments('id');
    table.integer('movie_id');
    table.foreign('movie_id').references('movie.id');
    table.integer('genre_id');
    table.foreign('genre_id').references('genre.id');
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movie_genre');
};

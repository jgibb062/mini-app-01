/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie_genre').del()
  await knex('movie_genre').insert([
    {id: 1, movie_id: 5, genre_id: 8},
    {id: 2, movie_id: 5, genre_id: 9},
    {id: 3, movie_id: 5, genre_id: 3},
    {id: 4, movie_id: 4, genre_id: 8},
    {id: 5, movie_id: 4, genre_id: 5},
    {id: 6, movie_id: 3, genre_id: 3},
    {id: 7, movie_id: 3, genre_id: 6},
    {id: 8, movie_id: 3, genre_id: 7},
    {id: 9, movie_id: 2, genre_id: 3},
    {id: 10, movie_id: 2, genre_id: 4},
    {id: 11, movie_id: 2, genre_id: 5},
    {id: 12, movie_id: 1, genre_id: 1},
    {id: 13, movie_id: 1, genre_id: 3},
    {id: 14, movie_id: 1, genre_id: 2}
  ]);
};
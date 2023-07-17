/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie_actor').del()
  await knex('movie_actor').insert([
    {id: 1, movie_id: 5, actor_id: 5},
    {id: 2, movie_id: 4, actor_id: 4},
    {id: 3, movie_id: 3, actor_id: 3},
    {id: 4, movie_id: 2, actor_id: 2},
    {id: 5, movie_id: 1, actor_id: 1}
  ]);
};

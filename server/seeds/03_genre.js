/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('genre').del()
  await knex('genre').insert([
    {id: 1, name: 'Teen'},
    {id: 2, name: 'Comedy'},
    {id: 3, name: 'Drama'},
    {id: 4, name: 'Crime'},
    {id: 5, name: 'Thriller'},
    {id: 6, name: 'Action'},
    {id: 7, name: 'Adventure'},
    {id: 8, name: 'Sci-Fi'},
    {id: 9, name: 'Mystery'}
  ]);
};
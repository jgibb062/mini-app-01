/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('actor').del()
  await knex('actor').insert([
    {id: 1, name: 'Lindsay Lohan'},
    {id: 2, name: 'Jonny Lee Miller'},
    {id: 3, name: 'Liam Neeson'},
    {id: 4, name: 'Cillian Murphy'},
    {id: 5, name: 'Domhnall Gleeson'}
  ]);
};

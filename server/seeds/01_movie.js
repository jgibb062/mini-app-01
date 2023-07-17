/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie').del()
  await knex('movie').insert([
    {id: 1, title: 'Mean Girls', director:'Mark Waters',release_year:'2004', duration:'97 minuntes'},
    {id: 2, title: 'Hackers', director:'Iain Softley',release_year:'1995', duration:'107 minuntes'},
    {id: 3, title: 'The Grey', director:'Joe Carnahan',release_year:'2011', duration:'117 minuntes'},
    {id: 4, title: 'Sunshine', director:'Danny Boyle',release_year:'2007', duration:'107 minuntes'},
    {id: 5, title: 'Ex Machina', director:'Alex Garland',release_year:'2014', duration:'108 minuntes'}
  ]);
};




const express = require('express');
const app = express();
const port = 8080
const knex = require('knex')(require('./knexfile.js')['development']);


app.get ('/', (req, res) => {
  res.status(200).json('Hello from Docker world.')
})

app.get('/movies', (req, res) => {
  knex('movies')
  .select('movies.title')
  .then(movieTitle => {
    res.json(movieTitle);
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('Server Error')
  });
});











// Start Server
app.listen(port, () => {
  console.log(`App is running on ${port}.`)
});


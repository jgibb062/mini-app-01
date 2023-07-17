const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080
const knex = require('knex')(require('./knexfile.js')['development']);

// Start Server
app.listen(port, () => {
  console.log(`App is running on ${port}.`)
});

app.use(express());
app.use(cors());

app.get ('/', (req, res) => {
  res.status(200).json('Hello from Docker world.')
})

app.get('/movies', (req, res) => {
  knex('movie')
  .select('movie.title')
  .then(movieTitle => {
    res.json(movieTitle);
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('Server Error')
  });
});

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080
const knex = require('knex')(require('./knexfile.js')['development']);
import mySQLHelpers, { selectFromTable } from './mySQLHelpers.js';



app.use(express());
app.use(cors());

app.get ('/', (req, res) => {
  res.status(200).json('Hello.')
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

app.get('/actors', (req, res) => {
  knex('actor')
  .select('actor.name')
  .then(actorName => {
    res.json(actorName);
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
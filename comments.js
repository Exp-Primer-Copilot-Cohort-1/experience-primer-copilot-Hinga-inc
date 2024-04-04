// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Load the comments
const comments = require('./comments.json');

// Path: /comments
// Method: GET
// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Path: /comments
// Method: POST
// Add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;

  comments.push(comment);
  res.json(comment);
});

// Path: /comments/:id
// Method: GET
// Get a comment by ID
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments[id];

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send();
  }
});

// Path: /comments/:id
// Method: PUT
// Update a comment by ID
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body;

  comments[id] = comment;
  res.json(comment);
});

// Path: /comments/:id
// Method: DELETE
// Delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;

  comments.splice(id, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
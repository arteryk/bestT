const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/toDos', (req, res) => {
  res.send([1, 2, 3, 4]);
});

// /api/toDos/1
app.get('/api/toDos/:toDoID', (req, res) => {
  res.send(req.params.toDoID);
});

// /api/posts/1
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on Port ${port}!...`));


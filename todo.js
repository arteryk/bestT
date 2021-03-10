//import express from 'express';
const Joi = require('joi'); // object ? 
const express = require('express');
const app = express();

app.use(express.json());

const toDos = [
  { id: 1, name: 'ToDo1' , description: 'Simple' },
  { id: 2, name: 'ToDo 2', description: '' },
  { id: 3, name: 'ToDo 3', description: '' },
];

app.get('/', (req, res) => {
  return res.send('This is The KosDo App');
});

// allToDos
app.get('/api/toDos', (req, res) => {
  return res.send(toDos);
});

// toDoByID
app.get('/api/toDos/:id', (req, res) => {
  const toDo = toDos.find(smt => smt.id === parseInt(req.params.id)); // ?? smt
  if (!toDo) return res.status(404).send('The ToDo with that ID was not Found'); //404
  return res.send(toDo);
});


//post
app.post('/api/toDos', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };

  const result = Joi.validate(req.body, schema);
  console.log(result);

  if (!req.body.name || req.body.name.length < 3) {
    return res.status(400).send('Name is required and must be minimum 3 characters')
  }
  const toDo = {
    id:toDos.length + 1,
    name: req.body.name,
    description: req.body.description
  };
  toDos.push(toDo);
  res.send(toDo);
});

// /api/posts/1
app.get('/api/posts/ID', (req, res) => {
  if (res.body.id !== ID) return res.send('No ToDo Available with that ID');  // ??
  res.send(req.query);
});

// PORT Listener
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on Port ${port}!...`));




// put toDos
// delete toDos / id
// post toDos : jsn ... create new todo.
// mkdir database ... separate jSons
// archived : jSons
// model controller view ...
// folder with models
// folder with controllers
// function for unique IDs
// body parse to parse the request 
// import not require 
// esm




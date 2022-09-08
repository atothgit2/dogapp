// ToDo & Info
// https://dev.to/macmacky/get-better-with-typescript-using-express-3ik6
// Refactor by using ExpressJS: https://www.youtube.com/watch?v=-MTSQjw5DrM&t=38s

import express from "express";
import bodyParser from "body-parser";

import Dog from "./models/dog"
// const Dog = require('../models/dog') // = model
export const app = express();

app.use(express.json()); // Handle the coming data
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// type DogType =  {
//   id: number;
//   name: string;
//   breed: "labrador" | "german shepherd" | "golden retriever";
//   adopted_at: Date | null;
//   birth_date: Date | null;
// }

// GET ALL RECORDS
app.get('/dogs', (req, res): void => {
  Dog.find() // model function, we are not using it on an instance
    // @ts-ignore
    .then((result) => {res.send(result)})
    // @ts-ignore
    .catch((err) => {console.log(err);})
});

// GET SINGLE RECORD
// feature request: get record by any key
app.get('/dog/:id', (req, res): void => {
  let id: string = req.params.id;

  Dog.findById(id)
  // @ts-ignore
  .then((result) => {res.send(result)})
  // @ts-ignore
  .catch((err) => {console.log(err);})
});

// CREATE NEW RECORD
// process multiple creation requests
app.post('/dog', (req, res): void => {
  const dog = new Dog({
    id: req.body[0].id,
    name: req.body[0].name,
    breed: req.body[0].breed,
    adopted_at: req.body[0].adopted_at,
    birth_date: req.body[0].birth_date
  });
  // @ts-ignore
  dog.save() // = instance function
  // @ts-ignore
  .then((result) => {res.send(result)})
  // @ts-ignore
  .catch((err) => {console.log(err);});
});

// DELETE RECORD
// be able to delete by any (combination of) key(s)
app.delete('/dog/:id', (req, res): void => {
  let id: string = req.params.id;

  Dog.findById(id).deleteMany()
  // @ts-ignore
  .then((result) => {res.send(result)})
  // @ts-ignore
  .catch((err) => {console.log(err);})
});

export default app;